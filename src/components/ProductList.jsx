import ProductCard from "./ProductCard";

function ProductList({ products, cart, setCart }) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default ProductList;