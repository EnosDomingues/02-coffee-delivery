import { CompleteYourOrderContainer, DeliveryAddressContainer, DeliveryAddressContainerForm, DeliveryAddressContainerHeader } from "./styles";
import mapPin2 from "../../assets/map-pin-2.svg"
import { InputText } from "../InputText";


export function CompleteYourOrder() {

  return (
    <CompleteYourOrderContainer>
      <b>Complete seu pedido</b>
      <DeliveryAddressContainer>
        <DeliveryAddressContainerHeader>
         <img src={mapPin2} alt="" />
         <span>Endereço de Entrega</span>
         <p></p>
         <p>Informe o endereço onde deseja receber seu pedido</p>
        </DeliveryAddressContainerHeader>
        <DeliveryAddressContainerForm>
          <InputText type="text" placeholder="CEP" id="cep" />
          <InputText type="text" placeholder="Rua" id="address" />
          <InputText type="text" placeholder="Número" id="number" />
          <InputText type="text" optional placeholder="Complemento" id="complement"/>
          <InputText type="text" placeholder="Bairro" id="district"/>
          <InputText type="text" placeholder="Cidade" id="city"/>
          <InputText type="text" placeholder="UF" id="uf"/>
        </DeliveryAddressContainerForm>
      </DeliveryAddressContainer>
    </CompleteYourOrderContainer>

  )
}