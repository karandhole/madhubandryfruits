import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";
import product_data from "@/data/product-data";
import Footer from "@/layouts/footer/footer";
import ShopDetailsArea from "@/components/shop-details/shop-details-area";
import RelatedProducts from "@/components/product/related-products";

export const metadata: Metadata = {
   title: "Shop | Madhuban Store",
};

// ✅ Add this function so Next.js can export static pages
export async function generateStaticParams() {
  return product_data.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function ShopDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = [...product_data].find(
    (item) => item.id === Number(params.id)
  )!;

  return (
    <Wrapper>
      <Header />

      <main>
        <BreadcrumbThree
          title={product.title}
          category={product.category.parent}
          bgClr="grey-bg"
        />

        <ShopDetailsArea product={product} />

        <RelatedProducts category={product.category.parent} />

        <FeatureArea style_2={true} />
      </main>

      <Footer />
    </Wrapper>
  );
}
