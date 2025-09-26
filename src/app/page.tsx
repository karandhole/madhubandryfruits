import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import HeroBanner from "@/components/hero-banner/hero-banner";
import CategoryArea from "@/components/category/category-area";
import ProductArea from "@/components/product/home/product-area";
import ProductFeatureArea from "@/components/product/feature/product-feature-area";
import OfferCountdownBanner from "@/components/product/countdown-banner/offer-countdown-banner";
import ProductBannerArea from "@/components/banner/product-banner-area";
import AllProducts from "@/components/product/home/all-products";
import BlogItems from "@/components/blogs/blog-items";
import FeatureArea from "@/components/feature/feature-area";
import Footer from "@/layouts/footer/footer";
import HeroBannerSix from "@/components/hero-banner/hero-banner-6";
import ProductBannerAreaFive from "@/components/banner/product-banner-area-5";
import ChooseArea from "@/components/choose-us/choose-area";
import ProductBannerAreaThree from "@/components/banner/product-banner-area-3";
import ProductBrandFeature from "@/components/product/feature/product-brand-feature";
import InstagramArea from "@/components/instagram/instagram-area";
import AboutAreaThree from "@/components/about/about-area-3";

export const metadata: Metadata = {
  title: "Madhuban Store"
};

export default function HomePage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* hero start */}
        <HeroBannerSix/>
        {/* hero end */}

        {/* category start */}
        <section className="category-area grey-bg pt-20 pb-40">
          <div className="container">
            <CategoryArea cls="category-active"/>
          </div>
        </section>
        {/* category end */}

        {/* weekly product start */}
        <ProductArea />
        {/* weekly product end */}

        {/* product feature start */}
          <ProductBannerAreaFive/>
        {/* product feature end */}

        {/* product banner start */}
        {/* <ProductBannerArea /> */}
          <ChooseArea />
        {/* product banner end */}

         <ProductBannerAreaThree />
        {/* product banner area end */}

        {/* product brand feature start */}
        <ProductBrandFeature />
        {/* product brand feature end */}
        <AboutAreaThree/>

        {/* deal offer start */}
        <OfferCountdownBanner />
        {/* deal offer end */}

        {/* blogs start */}
        <BlogItems />
        {/* blogs end */}
         {/* instagram area start */}
        {/* <InstagramArea /> */}
        {/* instagram area end */}


        {/* feature area start */}
        <FeatureArea />
        {/* feature area end */}

      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
