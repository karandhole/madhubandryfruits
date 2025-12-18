import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-2";
import CartArea from "@/components/cart/cart-area";
import Footer from "@/layouts/footer/footer";

export const metadata: Metadata = {
   title: "Madhuban Store",
};

export default function CartPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb-area-start */}
        <BreadcrumbTwo title="Cart" />
        {/* breadcrumb-area-end */}

        {/* cart area start */}
        <CartArea/>
        {/* cart area end */}

        {/* feature area start */}
    
        {/* feature area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
