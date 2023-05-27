import { Button, Modal, Input, Select, Upload, Form } from "antd";
import { UploadOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { createProduct, deleteProductImageFromCloud, updateProduct } from "../../api/product";
import "./Product.css";
const provinceData = ["Jiangsu"];

const cityData = {
  Jiangsu: [
    "Golden Cutlery",
    "Silver Cutlery",
    "Color Cutlery",
    "Kitchen Tool",
  ],
};
function EditProduct(props) {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [productsUrl, setProductsUrl] = useState([]);
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const handleOk = async (e) => {
      props.handleModel(false);
      await updateProduct(form.getFieldsValue(['_id'])._id,{
          name: form.getFieldsValue(['name']).name,
          price: form.getFieldsValue(['price']).price,
          category: form.getFieldsValue(['category']).category,
          description: form.getFieldsValue(['description']).description,
        })
    window.location.reload();
  };
  const handleCancel = () => {
    props.handleModel(false);
  };

  const finishingOptions = [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
  ];
  const categoryOptions = [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
  ];
  console.log(productsUrl, "PURL");

  useEffect(() => {
    console.log(props.product);
    if (props.product) form.setFieldsValue(props.product);
  }, [props]);
  return (
    <Modal
      title="Edit Product"
      open={true}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical" onValuesChange={onRequiredTypeChange}>
        <Form.Item label="Product Name" name={"name"}>
          <Input placeholder="Product name" />
        </Form.Item>
        <Form.Item label="Product Color" name={"price"}>
          <Input placeholder="Product Color" />
        </Form.Item>
        <Form.Item label="Product Category" name={"category"}>
          <Select
            style={{
              width: 470,
            }}
            value={secondCity}
            // onChange={onSecondCityChange}
            options={cities.map((city) => ({
              label: city,
              value: city,
            }))}
          />
        </Form.Item>

        {/* <Form.Item label="Finishing Item" name={"finishing_item"}>
          <Select
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={finishingOptions}
          />
        </Form.Item>
        <Form.Item label="Category">
          <Select
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={categoryOptions}
          />
        </Form.Item> */}
        <Form.Item label="Description" name={"description"}>
          <TextArea rows={4} />
        </Form.Item>
        <Upload
          action="/api/product-images"
          listType="picture"
          defaultFileList={
            props.product
              ? props.product.imageUrls.map((url, index) => ({
                  uid: index,
                  name: `Image ${index + 1}`,
                  status: "done",
                  url: url,
                  response: [
                    {
                      filename: url.split("/").reverse()[0].split(".")[0],
                    },
                  ],
                }))
              : []
          }
          onRemove={(file) => {
            console.log(file, "ON REMOVEFILE");
            const response = Promise.all(
              file.response.map((image) =>
                deleteProductImageFromCloud(image.filename)
              )
            );
            console.log(response, "response");
          }}
          onChange={(info) => {
            if (info.file.status === "done") {
              console.log(info, "imfo ere");
              setProductsUrl(
                info.fileList.map((file) => {
                  console.log(file, "FILE");
                  return file.response[0].path;
                })
              );
            }
          }}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form>
    </Modal>
  );
}

export default EditProduct;
