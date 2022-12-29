import { PaymentContainer, PaymentContainerHeader, PaymentOption, PaymentOptionsContainer } from "./styles";

import dollarIcon from '../../assets/dollar.svg'
import creditCardIcon from '../../assets/cartao-credito.svg'
import debitCardIcon from '../../assets/cartao-debito.svg'
import moneyIcon from '../../assets/dinheiro.svg'
import { useFormContext } from "react-hook-form";

export function Payment() {

  const { register } = useFormContext()

  return (
    <PaymentContainer>
      <PaymentContainerHeader>
         <img src={dollarIcon} alt="" />
         <span>Pagamento</span>
         <p></p>
         <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </PaymentContainerHeader>
      <PaymentOptionsContainer>
        <PaymentOption>
          <input defaultChecked type="radio" value="Cartão de crédito" id="cartao-credito" {...register("payment")} />
          <label htmlFor="cartao-credito">
            <img src={creditCardIcon} alt="" />
            <div>
            CARTÃO DE CRÉDITO
            </div>
          </label>
        </PaymentOption>

        <PaymentOption>
          <input type="radio" value="Cartão de débito" {...register("payment")} id="cartao-debito" />
          <label htmlFor="cartao-debito">
            <img src={debitCardIcon} alt="" />
            <div>
              CARTÃO DE DÉBITO
            </div>
          </label>
        </PaymentOption>

        <PaymentOption>
          <input type="radio" value="Dinheiro" {...register("payment")} id="dinheiro" />
          <label htmlFor="dinheiro">
            <img src={moneyIcon} alt="" />
            <div>
              DINHEIRO
            </div>
          </label>
        </PaymentOption>
      </PaymentOptionsContainer>
    </PaymentContainer>
  )
}