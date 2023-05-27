import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import ImagePreview from "../ImagePreview/ImagePreview";
import "../ProductDetail/ProductDetail.css";
import FormDialog from "../FormDialog/FormDialog";
import { useEffect, useState } from "react";
import Appbar from "../Header/Appbar";
import * as Product from "../../api/product";

export default function LiveProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [state, setState] = useState({ dialog: false });

  const handleSubmit = () => {
    setState({ ...state, dialog: true });
  };

  const getproductById = async () => {
    try {
      const result = await Product.getSingleProduct(id);
      setProduct({
        ...result.data,
        images: result.data.imageUrls,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getproductById();
    };
    init();
  }, []);

  if (!product) {
    return <></>;
  }

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
              <tr>
                <th>Name:</th>
                <td>{product.name}</td>
              </tr>
              <tr>
                <th>Color:</th>
                <td>{product.price}</td>
              </tr>
              <tr>
                <th>Categories:</th>
                <td>{product.category}</td>
              </tr>
              <tr>
                <th>Description:</th>
                <td>{product.description}</td>
              </tr>
            </table>
            <div style={{ marginTop: 20 }}></div>
            <button onClick={handleSubmit} id="typeSubmit" className="btn">
              Send Enquiry
            </button>
          </div>
        </div>
        {/* <div className="product-description">
          <h5 style={{ textAlign: "center", margin: 30 }}>Description</h5>
          <div className="is-divider"></div> */}
        {/* {product.description.map((v, k) => {
            return (
              <>
                <p>{v}</p>
              </>
            );
          })} */}
        {/* </div> */}
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
