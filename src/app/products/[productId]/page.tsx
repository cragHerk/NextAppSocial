export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>Details about {params.productId}</h1>
    </>
  );
}
