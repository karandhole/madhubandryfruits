import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import Footer from "@/layouts/footer/footer";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";
import FeatureArea from "@/components/feature/feature-area";
import BlogDetailsArea from "@/components/blogs/details/blog-details-area";
import blog_data from "@/data/blog-data";

export const metadata: Metadata = {
  title: "Blog Details - Orfarm",
};

// ✔ Required for static export
export async function generateStaticParams() {
  return blog_data.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = blog_data.find(
    (item) => item.id === Number(params.id)
  );

  if (!blog) return <div>Blog not found</div>;

  return (
    <Wrapper>
      <Header />

      <main>
        <BreadcrumbThree category={blog.category} title={blog.title} />
        <BlogDetailsArea blog={blog} />
        <FeatureArea style_2={true} />
      </main>

      <Footer />
    </Wrapper>
  );
}
