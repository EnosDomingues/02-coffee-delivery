import { useContext } from "react";
import { Product as ProductProps } from "../../pages/Home";
import { Product } from "../Product";
import { CartContext } from '../../contexts/CartContext'
import { ProductListContainer, ProductListHeader } from "./styles";

interface ProductListProps {
  products: ProductProps[]
}

export function ProductList({ products }: ProductListProps) {

  return (
    <>
      <ProductListHeader>Nossos cafés</ProductListHeader>
      <ProductListContainer>
        {products.map((product) => <Product product={product} key={product.title}/>)}
      </ProductListContainer>
    </>
  )
}