import useFetch from "../hooks/useFetch";
import "./Products.css";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2 className="status">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="status error">Error: {error}</h2>;
  }

  return (
    <div className="grid">
      {data.slice(0, 12).map((item) => (
        <div className="card" key={item.id}>
          <img src={item.images[0]} alt={item.title} />
          <h3>{item.title}</h3>
          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
