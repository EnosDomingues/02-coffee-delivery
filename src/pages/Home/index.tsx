import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../lib/axios";
import { HomeContainer } from "./styles";

export interface Product {
  img: string
  title: string
  description: string
  tags: string[]
  price: number
}

export function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data)
    })
  }, [])

  return (
    <HomeContainer>
      <Header />
      <Banner /> 
      <ProductList products={products}/>
    </HomeContainer>
  )
}