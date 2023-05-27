import { Button, Modal, Input, Select, Upload, Form } from "antd";
import { UploadOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { createProduct, deleteProductImageFromCloud } from "../../api/product";
import "./Product.css";
const provinceData = ["Jiangsu"];

const cityData = {
  Jiangsu: [
    "Golden Cutlery",
    "Silver Cutlery",
    "Color Cutlery",
    "Kitchen Tool",
    "Aluminum Item",
  ],
};
function Product(props) {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [productsUrl, setProductsUrl] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(props.open);
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
  const showModal = () => {
    setIsModalOpen(true);
    props.handleModel(true);
  };
  const handleOk = async (e) => {
    setIsModalOpen(false);
    await createProduct({ ...form.getFieldsValue(true), files: productsUrl });
    props.handleModel(false);
    window.location.reload();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
  return (
    <Modal
      title="Add Product"
      open={isModalOpen}
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
          onRemove={(file) => {
            console.log(file, "FILE");
            if(file.error) {
return;
            }
            const response = Promise.all(
              file?.response?.map((image) =>
                deleteProductImageFromCloud(image?.filename)
              )
            );
            console.log(response, "response");
          }}
          onChange={(info) => {
            if (info.file.status === "done") {
              console.log(info);
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

export default Product;
