import { useEffect, useState } from "react";
import { top_products } from "../../db";
import Card from "../Card/Card";
import "../TopProducts/TopProducts.css";
import * as Product from "../../api/product";

export default function NewProduct() {
  const [newProduct, setNewProduct] = useState([]);

  const getproduct = async () => {
    try {
      const result = await Product.geNewtProduct();
      setNewProduct(
        result.data.map((product) => ({
          ...product,
          images: product.imageUrls,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getproduct();
    };
    init();
  }, []);

  return (
    <div style={{ padding: "50px 10px", textAlign: "center" }}>
      <h1>New Products</h1>
      <div style={{ marginTop: 50 }}></div>
      <div className="top-products">
        {newProduct.map((v, k) => {
          return (
            <>
              <Card product={v} key={k} live={true} />
            </>
          );
        })}
      </div>
    </div>
  );
}
