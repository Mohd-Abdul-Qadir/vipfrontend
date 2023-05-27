import { Button, Modal, Input, Select, Upload, Form } from "antd";
import { UploadOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { createProduct, deleteProductImageFromCloud, updateProduct } from "../../api/product";
import "./Product.css";
import constants from "../../constants";

const categoriesList = [
    "Golden Cutlery",
    "Silver Cutlery",
    "Color Cutlery",
    "Kitchen Tool",
    "Aluminum Item",
];

const { TextArea } = Input;

function  Product(props) {
  const [form] = Form.useForm();
  const [categories] = useState(categoriesList);
  const [progress,setInProgress] = useState()

  useEffect(() => {
    if (props.product) {
      const productSuitableForForm = {...props.product, imageUrls: props.product.imageUrls.map((url,index)=>({
        uid: index,
        name: `Image ${index + 1}`,
        status: "done",
        url: url,
        response: [
          {
            filename: url.split("/").reverse()[0].split(".")[0],
            path: url
          },
        ],
      }))}
      form.setFieldsValue(productSuitableForForm);
    }
  }, [props.product, form]);

  const handleOk = (e) => {
    form.validateFields().then(async(values) => {
      setInProgress(true)
      const productSuitableWithDB = {...values, imageUrls: values.imageUrls.filter(file => Array.isArray(file.response) && file.response.length).map(file => file.response[0].path)}
      if(props.product) { // update product
        await updateProduct(props.product._id,productSuitableWithDB)
      } else { // create product
        await createProduct(productSuitableWithDB); 
      }
      props.handleModel(false)
      window.location.reload()
    }).catch((error) => {
      console.log(error)
    }).finally(()=>{
      setInProgress(false)
    })
  };

  const handleCancel = () => {
    props.handleModel(false);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  };

  return (
    <Modal
      title="Add Product"
      open={true}
      onOk={handleOk}
      okButtonProps={{loading:progress}}
      onCancel={handleCancel}
      forceRender
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Product Name" name={"name"} rules={[{ required: true, message: 'Product name is required' }]}>
          <Input placeholder="Product name" />
        </Form.Item>
        <Form.Item label="Product Color" name={"price"} rules={[{ required: true, message: 'Product price is required' }]}>
          <Input placeholder="Product Color" />
        </Form.Item>
        <Form.Item label="Product Category" name={"category"} rules={[{ required: true, message: 'Product category is required' }]}>
          <Select
            style={{
              width: 470,
            }}
            options={categories.map((city) => ({
              label: city,
              value: city,
            }))}
          />
        </Form.Item>
        <Form.Item label="Description" name={"description"} rules={[{ required: true, message: 'Description is required' }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name={"imageUrls"} valuePropName="fileList" label="Images" rules={[{ required: true, message: 'At least one image is required' }]} getValueFromEvent={normFile}>
          <Upload
            action={`${constants.BASE_API}/product-images`}
            listType="picture"
            maxCount={4}
            multiple
            onRemove={(file) => {
              if(!file.error && Array.isArray(file.response)) {
                Promise.all(
                  file?.response?.map((image) =>
                    deleteProductImageFromCloud(image?.filename)
                  )
                );
              }
            }}
          >
            <Button icon={<UploadOutlined />}>Upload (max 4)</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default Product;
