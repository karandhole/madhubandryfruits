"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import category_data from "@/data/category-data";
import { useRouter } from "next/navigation";

// prop type
type IProps = {
  cls?: string;
  perView?: number;
  showCount?: boolean;
};

const CategoryArea = ({ cls, perView = 8, showCount = true }: IProps) => {
  const router = useRouter();
  // slider setting
  const slider_setting = {
    slidesPerView: perView,
    spaceBetween: 20,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    breakpoints: {
      "1400": {
        slidesPerView: 6,
      },
      "1200": {
        slidesPerView: 6,
      },
      "992": {
        slidesPerView: 5,
      },
      "768": {
        slidesPerView: 4,
      },
      "576": {
        slidesPerView: 3,
      },
      "0": {
        slidesPerView: 2,
      },
    },
  };

  // handle search 
  const handleCategorySearch = (title: string) => {
    router.push(`/search?category=${title.split(" ").join("-").toLowerCase()}`);
  }
  return (
    <>
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="tpsection mb-35">
        
            <h4 className="tpsection__title">SHOP BY CATEGORIES</h4>
           
          </div>
        </div>
      </div>
      <Swiper {...slider_setting} className={`swiper-container ${cls}`}>
        {category_data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="category__item mb-30">
              <div className="category__thumb fix mb-15">
                {/* <a onClick={() => handleCategorySearch(item.name)} className="pointer"> </a> */}
                <Image
                  src={item.img}
                  width={80}
                  height={80}
                  alt="category-thumb"
                />

              </div>
              <div className="category__content">
                <h5 className="category__title">
                  <Link href="/shop">{item.name}</Link>
                </h5>
                {/* {showCount && (
                  <span className="category__count">
                    {item.product_id.length <= 9 && item.product_id.length !== 0
                      ? `0${item.product_id.length}`
                      : `${item.product_id.length}`}{" "}
                    items
                  </span>
                )} */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategoryArea;
