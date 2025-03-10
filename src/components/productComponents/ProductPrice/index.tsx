import { IProduct } from "@/interface";
import React from "react";

interface ProductPriceProps {
  product: IProduct;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ product }) => {
  const { price, discountedPrice } = product;

  const priceElement =
    price > discountedPrice ? (
      <>
        <p className="text-primary">{discountedPrice}</p>
        <p className="line-through">{price}</p>
      </>
    ) : (
      <p className="">{price}</p>
    );

  return <div className="flex gap-5 mt-3 mb-3">{priceElement}</div>;
};

export default ProductPrice;
