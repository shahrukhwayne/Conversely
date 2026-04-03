import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col h-full">
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.title}
        className="h-40 w-full object-contain"
      />

      {/* Content */}
      <div className="flex flex-col flex-grow">
        {/* Title */}
        <h2 className="!text-black text-sm font-semibold mt-3 line-clamp-2">
          {product.title}
        </h2>

        {/* Show Price */}
        <p className="text-green-600 font-bold mt-2 text-lg">
          $ {product.price}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-auto">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="star"
            className="w-4 h-4"
          />

          <span className="ml-1 text-gray-600">{product.rating || "0.0"}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
