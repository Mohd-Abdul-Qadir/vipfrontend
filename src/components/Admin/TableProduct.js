import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as Product from "../../api/product";
import EditProduct from "./Product";

const TableProduct = () => {
  const [table, setTable] = useState("");
  const [editProduct, setEditProduct] = useState({
    open: false,
    product: null,
  });

  const navigate = useNavigate();

  const columns = [
    {
      title: "Image",
      dataIndex: "imageUrls",
      width: "50px",
      render: (url) => (
        <img
          src={url[0]}
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
        {
          text: "Category 2",
          value: "Category 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "30%",
    },
    // {
    //   title: "Id",
    //   dataIndex: "_id",
    //   sorter: (a, b) => a.age - b.age,
    // },
    {
      title: "Description",
      dataIndex: "description",
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "30%",
    },
    {
      title: "Category",
      dataIndex: "category",
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "20%",
    },
    {
      title: "Color",
      dataIndex: "price",
      // key: "x",
      width: "30%",
    },
    {
      title: "Edit",
      dataIndex: "",
      key: "x",
      render: (data) => (
        <a>
          <EditOutlined
            onClick={() => {
              setEditProduct({ open: true, product: data });
            }}
          />
        </a>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (data) => (
        <a>
          <DeleteFilled
            onClick={async () => {
              console.log(data._id);
              await Product.deleteProduct(data._id);
              window.location.reload();
            }}
          />
        </a>
      ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  const getTable = async () => {
    try {
      const result = await Product.geAlltProduct();
      setTable(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getTable();
    };
    init();
  }, []);

  const handleModel = (open) => {
    setEditProduct({ open, product: null });
  };
  console.log(editProduct, "EDIT PRODUCT");
  return (
    <>
      <Table columns={columns} dataSource={table.data} onChange={onChange} />
      {editProduct.open && (
        <EditProduct product={editProduct.product} handleModel={handleModel} />
      )}
    </>
  );
};

export default TableProduct;
