import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Home = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.org/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        setProducts(data?.data || []); 
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Filter Key
  const filteredProducts = products.filter((p) =>
    p.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar search={search} setSearch={setSearch} />

      <div className="p-4">

        {loading && <Loader />}
        {error && <Error />}

        {!loading && !error && (
          <>
            
            {filteredProducts.length === 0 && (
              <h2 className="text-center text-gray-500 mt-10">
                No products found 
              </h2>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}

            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Home;