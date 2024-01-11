import Link from "next/link";

export default function Products() {
  const productId = 200;
  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>Products</h1>
      <h2>
        <Link href={"products/1"}>Product1</Link>
      </h2>
      <h2>
        <Link href={"products/2"}>Product2</Link>
      </h2>
      <h2>
        <Link href="products/3" replace>
          Product3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product{`${productId}`}</Link>
      </h2>
    </>
  );
}
