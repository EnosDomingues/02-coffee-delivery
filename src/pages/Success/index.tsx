import { Header } from "../../components/Header";
import { OrderInfo, SuccessContainer, SuccessContainerBody } from "./styles";

import locationSuccessSVG from "../../assets/location-success.svg"
import deliveryTimeSVG from "../../assets/delivery-time.svg"
import paymentMethodSVG from "../../assets/payment-method.svg"
import { DeliveryDetails } from "./components";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

interface Order {
  cep: string
  address: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
  payment: string
}

enum ActionTypes {
  EMPTY_CART = 'EMPTY_CART',
}

export function Success() {

  const { userOrder, setUserOrder } = useContext(OrderContext)
  const { cartContextDispatch } = useContext(CartContext)
  const [lastOrder] = useState(userOrder)


  useEffect(() => {
    setUserOrder({} as Order)
    cartContextDispatch({ type: ActionTypes.EMPTY_CART })
  }, [])

  return (
    <SuccessContainer>
      {!lastOrder.address  && <Navigate replace to="/" />}
      <Header />
      <SuccessContainerBody>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderInfo>
          <div>
            <DeliveryDetails icon={locationSuccessSVG} address={lastOrder.address} number={lastOrder.number}/>
            <DeliveryDetails icon={deliveryTimeSVG} title="Previsão de entrega" value="20 min - 30 min"/>
            <DeliveryDetails icon={locationSuccessSVG} title="Pagamento na entrega" value={lastOrder.payment}/>
          </div>
        </OrderInfo>

      </SuccessContainerBody>
    </SuccessContainer>
  )
}