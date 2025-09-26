import Link from 'next/link';
import React from 'react';

const ProductBannerAreaFive = () => {
   return (
      <section className="banner-area pb-55 pt-40">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-12">
                  <div className="tpbanner__wraper mb-20">
                     <div className="tpbanner__thumb">
                        <Link href="/">
                           <div className="tpbanner__big-text tpbanner__big-bg" style={{ backgroundImage: "url(/assets/img/banner/banner4.png)" }}>
                              <div className="tpbanner__big-bg-content">
                                 <span className="tpbanner__sub-title mb-20">Top offers</span>
                                 <h4 className="tpbanner__title mb-15">pepper <br /> Weekend promo</h4>
                                 <p>Natural, Rich in Nutrition</p>
                                 <div className="tpbanner__btn">
                                    <span className="whight-btn">Shop Now</span>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="row">
                     <div className="col-lg-12 col-md-12">
                        <div className="tpbanner__thumb mb-20">
                           <Link href="/">
                              <div className="tpbanner__text tpbanner__bg3" style={{ backgroundImage: "url(/assets/img/banner/banner-11.jpg)" }}>
                                 <div className="tpbanner__bg__second-content">
                                    <span className="tpbanner__sub-title mb-20">Top offers</span>
                                    <h4 className="tpbanner__title mb-15">Healthy Snack <br /> Premium Almonds</h4>
                                    <p>Crunchy Goodness Everyday</p>
                                 </div>
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="row gx-3">
                     <div className="col-lg-6 col-md-6">
                        <div className="tpbanner__thumb mb-20">
                           <Link href="/">
                              <div className="tpbanner__text tpbanner__bg4" style={{ backgroundImage: "url(/assets/img/banner/banner-10.jpg)" }}>
                                 <h4 className="tpbanner__title mb-15">Power Packed <br /> Fresh Walnuts</h4>
                                 <p>Boost Your Brain Health</p>
                              </div>
                           </Link>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-6">
                        <div className="tpbanner__thumb mb-20">
                           <Link href="/">
                              <div className="tpbanner__text tpbanner__bg4" style={{ backgroundImage: "url(/assets/img/banner/banner2.png)" }}>
                                 <h4 className="tpbanner__title mb-15">Natural Sweetness <br /> Organic Dates</h4>
                                 <p>Energy the Healthy Way</p>
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ProductBannerAreaFive;