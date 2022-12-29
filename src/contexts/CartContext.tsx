import React, { useEffect } from 'react'
import { createContext, ReactNode, useReducer } from "react"

interface CartContextProviderProps {
  children: ReactNode
}

interface Product {
  img: string
  title: string
  description: string
  tags: string[]
  price: number
}

interface ItemsToAddInTheCartProps {
  product: Product
  amount: number
}

interface CartState {
  cartProducts: ItemsToAddInTheCartProps[]
  cartContextDispatch: React.Dispatch<any>
}

interface CartContextType {
  cartProducts: ItemsToAddInTheCartProps[]
  cartContextDispatch: React.Dispatch<any>
}

enum ActionTypes {
  ADD_PRODUCT_TO_THE_CART = 'ADD_PRODUCT_TO_THE_CART',
  SUBTRACT_PRODUCT_TO_THE_CART = 'SUBTRACT_PRODUCT_TO_THE_CART',
  REMOVE_PRODUCT_TO_THE_CART = 'REMOVE_PRODUCT_TO_THE_CART',
  EMPTY_CART = 'EMPTY_CART',
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children  }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    (state: CartState, action: any) => {
      switch (action.type) {
        case ActionTypes.ADD_PRODUCT_TO_THE_CART: {
          const productToAdd = state.cartProducts.find(({product}) =>
            product.title === action.itemsToAddInTheCart.product.title) 
        
          if(!productToAdd) {
            return {...state, cartProducts: [...state.cartProducts, action.itemsToAddInTheCart]}
          }

          const updatedCartProductsAdd = state.cartProducts.map(({product, amount}) => {
            if(product.title === action.itemsToAddInTheCart.product.title) {
              return {product, amount: amount + 1}
            }

            return {product, amount}
          }) 

          return {...state, cartProducts: updatedCartProductsAdd}
        }
        
        case ActionTypes.SUBTRACT_PRODUCT_TO_THE_CART: {
        const productToSubtract = state.cartProducts.find(({product}) =>
          product.title === action.itemsToAddInTheCart.product.title) 
      
        if(!productToSubtract) {
          return {...state, cartProducts: [...state.cartProducts, action.itemsToAddInTheCart]}
        }

        const updatedCartProductsSubtract = state.cartProducts.map(({product, amount}) => {
          if(product.title === action.itemsToAddInTheCart.product.title) {
            return {product, amount: amount <= 1 ? 1 : amount - 1}
          }

          return {product, amount}
        }) 

        return {...state, cartProducts: updatedCartProductsSubtract}

        }
        
        case ActionTypes.REMOVE_PRODUCT_TO_THE_CART: {

        const updatedCartProducts = state.cartProducts.filter(({product, amount}) => {
          if(product.title !== action.itemsToAddInTheCart.product.title) {
            return {product, amount}
          }
        }) 

        return {...state, cartProducts: updatedCartProducts}

        }
        
        case ActionTypes.EMPTY_CART: {

        console.log("AQUI")

        return {...state, cartProducts: []}

        }

        default:
          return state
      }
    }, 
    {
      cartProducts: [],
      cartContextDispatch: () => {}
    }, () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee-delivery:cart-items-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },)

  const { cartProducts } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@ignite-coffee-delivery:cart-items-1.0.0', stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        cartContextDispatch: dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  )
}