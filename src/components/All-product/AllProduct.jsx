import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Appbar from "../Header/Appbar";
import * as Product from "../../api/product";

const AllProduct = () => {
  const [state, setState] = useState([]);

  useEffect(async () => {
    const result = await Product.geAlltProduct();
    setState(
      result.data.map((product) => ({
        ...product,
        images: product.imageUrls,
      }))
    );
  }, []);
  return (
    <>
      <Appbar />
      <div
        style={{ padding: "50px 10px", marginTop: "80px", textAlign: "center" }}
      >
        <h1>All Product</h1>
        <div className="is-divider" style={{ margin: "auto" }}></div>
        <div className="product-list">
          {state.map((v, k) => {
            return (
              <>
                <Card product={v} live={true} />
              </>
            );
          })}
        </div>
        {state.length == 0 && <div>No Product Found</div>}
      </div>
      <Footer />
    </>
  );
};

export default AllProduct;
