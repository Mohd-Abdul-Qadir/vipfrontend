import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ImagePreview from "../ImagePreview/ImagePreview";
import { products } from "../../db";
import "./ProductDetail.css";
import { MDBBtn } from "mdb-react-ui-kit";
import FormDialog from "../FormDialog/FormDialog";
import { useState } from "react";
import Appbar from "../Header/Appbar";

export default function ProductDetail() {
  const { name } = useParams();
  const product = products.find((p) => p.name.replaceAll("/", "") == name);
  const [state, setState] = useState({ dialog: false });

  const handleSubmit = () => {
    setState({ ...state, dialog: true });
  };

  return (
    <>
      {/* <Header /> */}
      <Appbar />
      <div className="product">
        <h1 style={{ textAlign: "center", margin: 30 }}>Product Details</h1>
        <div className="is-divider"></div>
        <div className="product-detail-container">
          <ImagePreview {...product} />
          <div className="product-detail">
            <h2>{product.name}</h2>
            <div className="is-divider"></div>
            <table width={"100%"} cellPadding={5}>
              {Object.entries(product)
                .slice(2, -1)
                .map((value, k) => {
                  return (
                    <>
                      <tr>
                        <th>{value[0].toUpperCase()}</th>
                        <td>{value[1]}</td>
                      </tr>
                    </>
                  );
                })}
            </table>
            <div style={{ marginTop: 20 }}></div>
            <button onClick={handleSubmit} id="typeSubmit" className="btn">
              Send Enquiry
            </button>
          </div>
        </div>
        <div className="product-description">
          <h5 style={{ textAlign: "center", margin: 30 }}>Description</h5>
          <div className="is-divider"></div>
          {product.description.map((v, k) => {
            return (
              <>
                <p>{v}</p>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
      <FormDialog
        state={state.dialog}
        onClose={() => setState({ ...state, dialog: false })}
        productName={product.name}
        productLink={window.location.href}
      />
    </>
  );
}
