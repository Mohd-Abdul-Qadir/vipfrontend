import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  const mapStyles = {
    width: "100%",
    height: "380px",
    marginBottom: "50px",
    marginTop: "50px",
  };
  return (
    <>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3496.413412431554!2d78.75853191508631!3d28.796751682353314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ3JzQ4LjMiTiA3OMKwNDUnMzguNiJF!5e0!3m2!1sen!2sin!4v1681929831765!5m2!1sen!2sin"
        width="600"
        height="400"
        style={mapStyles}
      />
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3496.413412431554!2d78.75853191508631!3d28.796751682353314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ3JzQ4LjMiTiA3OMKwNDUnMzguNiJF!5e0!3m2!1sen!2sin!4v1681929831765!5m2!1sen!2sin"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="tel:9756989823" className="me-4 text-reset">
              <i class="bi bi-telephone-fill"></i>
            </a>
            {/* <a
              href="https://api.whatsapp.com/send/?phone=+91 9756989823"
              className="me-4 text-reset"
            >
              <i className="fab fa-whatsapp"></i>
            </a> */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=irfankhan@vipcutlery.pro"
              className="me-4 text-reset"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://instagram.com/vip.cutlery?igshid=ZDdkNTZiNTM="
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Vip Cutlery
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Vip cutlery is the best manufacturer, exporter and supplier of
                  cutlery of different types and much more.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Top Products</h6>
                <p>
                  <a
                    href="/product-category/BRASS ARTICLE"
                    className="text-reset"
                  >
                    Brass Cutlery
                  </a>
                </p>
                <p>
                  <a
                    href="/product-category/ALUMINUM CRAFTED"
                    className="text-reset"
                  >
                    Aluminum Cutlery
                  </a>
                </p>
                <p>
                  <a
                    href="/product-category/WOODEN CRAFTED"
                    className="text-reset"
                  >
                    Steel Cutlery
                  </a>
                </p>
                <p>
                  <a href="/product-category/CAKE STAND" className="text-reset">
                    Cake Cutlery
                  </a>
                </p>
              </div>

              {/* <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>&nbsp;</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Aluminium Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Wire Mesh Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Hexagon Glass Mirror
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Silver Products
                </a>
              </p>
            </div> */}

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> House No.7, Gali No.1,
                  Jannat Bagh, Transport Nagar, Near RTO Office, Moradabad,
                  Moradabad, Uttar Pradesh, 244001
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  irfankhan@vipcutlery.pro
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +91 9756989823
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="">
            vipcutlery.pro
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
