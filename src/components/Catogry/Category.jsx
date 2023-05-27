import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Appbar from "../Header/Appbar";
import * as Product from "../../api/product";

const Category = () => {
  const { key } = useParams();

  const [state, setState] = useState([]);

  useEffect(async () => {
    const result = await Product.findCategory(key);
    setState(
      result.data.map((product) => ({
        ...product,
        images: product.imageUrls,
      }))
    );
  }, [key]);
  console.log(state);
  return (
    <>
      <Appbar />
      <div style={{ padding: "50px 10px", textAlign: "center" }}>
        <h1>Search Result</h1>
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

export default Category;
