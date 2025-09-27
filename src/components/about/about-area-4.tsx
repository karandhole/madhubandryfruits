import React from 'react';
import Image from 'next/image';
import about_inner from '@/assets/img/banner/about-first-removebg-preview.png';
import shape_1 from '@/assets/img/shape/tree-leaf-6.png';
import shape_2 from '@/assets/img/shape/tree-leaf-7.png';

const AboutAreaFour = () => {
   return (
      <section className="about-area pt-100 pb-60">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="tpabout__inner-thumb-2 p-relative mb-30">
                     <Image src={about_inner} alt="about-img" style={{ height: 'auto' }} />
                     <div className="tpabout__inner-thumb-shape d-none d-md-block">
                        <div className="tpabout__inner-thumb-shape-one">
                           <Image src={shape_1} alt="shape" />
                        </div>
                        <div className="tpabout__inner-thumb-shape-two">
                           <Image src={shape_2} alt="shape" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="tpabout__inner-2 mb-30">
                     <div className="tpabout__inner-tag mb-10">
                        <span className="active">About us</span>
                        <span>Welcome to Madhuban Store</span>
                     </div>
                     <h3 className="tpabout__inner-title-2 mb-25">Pure. Honest.<br />  Wholesome – The Madhuban Promise.</h3>
                     <p>At Madhuban Foods, we believe that true nourishment begins with nature’s finest offerings. <br />
                        We specialize in sourcing raw and unprocessed nuts directly from their origins across the world, <br /> ensuring that every product carries the essence of purity and authenticity. Our carefully handpicked nuts are sorted, graded, and packed only after passing rigorous quality checks, so you receive nothing less than the best.

                        Driven by a commit </p>
                     <div className="tpabout__inner-list">
                        <ul>
                           <li><i className="icon-check"></i> Track your daily activity.</li>
                           <li><i className="icon-check"></i> Start a private group video call.</li>
                           <li><i className="icon-check"></i> All the lorem ipsum generators on the Internet.</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutAreaFour;