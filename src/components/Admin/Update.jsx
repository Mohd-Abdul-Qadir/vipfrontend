import { Button, Modal, Input, Select, Upload, Form } from "antd";
import { UploadOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { createProduct } from "../../api/product";
import "./Product.css";
import { useParams } from "react-router-dom";
const provinceData = ["Jiangsu"];

const cityData = {
  Jiangsu: [
    "Golden Cutlery",
    "Silver Cutlery",
    "Color Cutlery",
    "Kitchen Tool",
  ],
};
function UpdateProduct(props) {
  const { id } = useParams();
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [productsUrl, setProductsUrl] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(props.open);
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  console.log(id, "product id");
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
  const handleOk = (e) => {
    setIsModalOpen(false);
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
  return (
    <Modal
      title="Update Product"
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
          onChange={(info) => {
            if (info.file.status === "done") {
              console.log(info);
              setProductsUrl(
                info.fileList.map((file) => file.response[0].path)
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

export default UpdateProduct;
