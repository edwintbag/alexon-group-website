import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, getProductById } from "../../../lib/products";
import ProductDetailClient from "./ProductDetailClient";

interface Props {
  params: { id: string };
}

// Generate static paths for all products at build time
export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductById(Number(params.id));
  if (!product) return { title: "Product Not Found | Alexon Group" };
  return {
    title: `${product.name} | Alexon Group Shop`,
    description: product.desc,
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(Number(params.id));
  if (!product) notFound();

  // Related: same category, different id
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return <ProductDetailClient product={product} related={related} />;
}
