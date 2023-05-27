import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../db";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Appbar from "../Header/Appbar";
import { findProduct } from "../../api/product";
import * as Product from "../../api/product";

export default function SearchList() {
  const { key } = useParams();
  const [state, setState] = useState([]);

  useEffect(async () => {
    //   const filter = findProduct.filter(
    const result = await Product.findProduct(key);
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
}
