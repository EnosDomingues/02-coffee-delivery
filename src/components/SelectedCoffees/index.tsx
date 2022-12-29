import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { MinusSVG } from "../../assets/MinusSVG";
import { PlusSVG } from "../../assets/PlusSVG";
import TrashSVG from "../../assets/trash.svg";
import { CartContext } from "../../contexts/CartContext";
import { ConfirmOrderButton, OrderSummary, ProductContainer, SelectedCoffeesContainer, SelectedCoffeesListContainer, UpdateProductButton } from "./styles";

enum ActionTypes {
  ADD_PRODUCT_TO_THE_CART = 'ADD_PRODUCT_TO_THE_CART',
  SUBTRACT_PRODUCT_TO_THE_CART = 'SUBTRACT_PRODUCT_TO_THE_CART',
  REMOVE_PRODUCT_TO_THE_CART = 'REMOVE_PRODUCT_TO_THE_CART',
}

export function SelectedCoffees() {

  const { cartProducts, cartContextDispatch } = useContext(CartContext)

  const [total, setTotal] = useState(0)

  const deliveryPrice = 350

  useEffect(() => {

    const totalProducts = cartProducts.reduce((acc, {product, amount}) => {
      return acc += product.price * amount
    }, 0)

    setTotal(totalProducts)

  }, [cartProducts])


  return (
    <SelectedCoffeesContainer>
      {cartProducts.length <= 0 && <Navigate replace to="/" />}
      <b>Cafés selecionados</b>
      <SelectedCoffeesListContainer>
        <>
        {cartProducts.map(({product, amount}) => {
          return (
            <ProductContainer key={product.title}>
              <img src={product.img} alt={product.description} />
              <div>
                <p>{product.title}</p>
                <div>
                  <div>
                    <UpdateProductButton 
                      onClick={() => cartContextDispatch({ 
                        type: ActionTypes.SUBTRACT_PRODUCT_TO_THE_CART,
                        itemsToAddInTheCart: { product, amount: amount } 
                      })}>
                      <MinusSVG />
                    </UpdateProductButton>

                    {amount}

                    <UpdateProductButton onClick={() => cartContextDispatch({ 
                      type: ActionTypes.ADD_PRODUCT_TO_THE_CART,
                      itemsToAddInTheCart: { product, amount: amount } 
                    })}>
                      <PlusSVG />
                    </UpdateProductButton>
                  </div>
                  <button onClick={() => cartContextDispatch({ 
                      type: ActionTypes.REMOVE_PRODUCT_TO_THE_CART,
                      itemsToAddInTheCart: { product } 
                  })}>
                    <img src={TrashSVG} alt="" />
                    REMOVER
                  </button>
                </div>
              </div>
              <b>
               R$ {(product.price * amount /100).toFixed(2).replace('.', ',')}
              </b>
            </ProductContainer>
              )
            })}
            <OrderSummary>
              <p id="total-items">Total de Itens</p>
              <p id="total-items-value">R$ {((total) /100).toFixed(2).replace('.', ',')}</p>
              <p id="delivery">Entrega</p>
              <p id="delivery-value">R$ 3,50</p>
              <b id="total">Total</b>
              <b id="total-value">R$ {((total+deliveryPrice) /100).toFixed(2).replace('.', ',')}</b>
            </OrderSummary>
            <ConfirmOrderButton type="submit">
              CONFIRMAR PEDIDO
            </ConfirmOrderButton>
          </>
      </SelectedCoffeesListContainer>
    </SelectedCoffeesContainer>
  )
}