import { Product as ProductType } from "../../pages/Home";
import { ProductContainer, ProductContainerFooter, ProductImage, ProductTag, ProductTagContainer, UpdateProductButton } from "./styles";

import productCart from '../../assets/product-cart.svg'
import { PlusSVG } from "../../assets/PlusSVG";
import { MinusSVG } from "../../assets/MinusSVG";
import { useContext, useReducer } from "react";
import { CartContext } from "../../contexts/CartContext";

enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  ADD_PRODUCT_TO_THE_CART = 'ADD_PRODUCT_TO_THE_CART',
  SUBTRACT_PRODUCT = 'SUBTRACT_PRODUCT'
}

interface ProductState {
  amount: number
}

interface ProductProps {
  product: ProductType
}

export function Product({ product }: ProductProps) {
  const { cartContextDispatch } = useContext(CartContext)
  const [productState, dispatch] = useReducer((state: ProductState, action: any) => {
    switch (action.type) {
      case ActionTypes.ADD_PRODUCT:
        return {...state, amount: state.amount + 1}

      case ActionTypes.SUBTRACT_PRODUCT:
        return state.amount > 1 ? {...state, amount: state.amount - 1} : state

      default:
        return state
    }
  }, 
  {
    amount: 1
  })
  
  return (
    <ProductContainer key={product.title}>
      <ProductImage src={product.img} />

      <ProductTagContainer>
        {product.tags.map(tag => (
          <ProductTag key={tag}>
            {tag}
          </ProductTag>
        ))}
      </ProductTagContainer>

      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <ProductContainerFooter>
        <span>
          R$ <strong>
                {(product.price/100).toFixed(2).replace('.', ',')}
            </strong>
        </span>

        <div>
          <UpdateProductButton onClick={() => dispatch({ type: ActionTypes.SUBTRACT_PRODUCT })}>
            <MinusSVG />
          </UpdateProductButton>

          {productState.amount}

          <UpdateProductButton onClick={() => dispatch({ type: ActionTypes.ADD_PRODUCT })}>
            <PlusSVG />
          </UpdateProductButton>
        </div>

        <button 
          onClick={() => 
            cartContextDispatch(
              { 
                type: ActionTypes.ADD_PRODUCT_TO_THE_CART, 
                itemsToAddInTheCart: { product, amount: productState.amount }   
              }
            )}>
          <img 
            src={productCart} 
            alt="Botão para adicionar produto ao carrinho" 
          />
        </button>
      </ProductContainerFooter>
      
    </ProductContainer>
  )
}