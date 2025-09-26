import React from "react";

const ProductBannerAreaThree = () => {
  return (
    <section className="tpbanner-area grey-bg">
      <div className="container">
        <div className="sections__wrapper white-bg pl-50 pr-50 pt-30">
          <div className="row">
            <div className="col-12">
              <div
                className="tpbannertwo text-center pt-40 pb-45 tpbannertwo__bg"
                style={{ backgroundImage: "url(/assets/img/banner/banner5.png)" }}
              >
                <span className="tpbannertwo__sub-title mb-5">The Dry Fruits</span>
                <h5 className="tpbannertwo__title mb-30">
                  Fresh & Premium <br /> Healthy Dry Fruits Special Offer
                </h5>
                <p>Do not miss our exclusive dry fruit deals!</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBannerAreaThree;
