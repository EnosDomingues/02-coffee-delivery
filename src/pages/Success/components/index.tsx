import { DeliveryDetailsContainer } from "./styles"

interface DeliveryDetailsProps {
  icon: string
  address?: string
  number?: string
  title?: string
  value?: string
}

export function DeliveryDetails({ icon, address, title, value, number }: DeliveryDetailsProps) {
  return (
    <DeliveryDetailsContainer>
      <img src={icon} alt="" />
      <div id="address">
        {address ? 
        <p>Entrega em <b>{address}, {number}</b></p> :
        <p>{title}</p>
        }
        {address ? 
        <p>Farrapos - Porto Alegre, RS</p> :
        <b>{value}</b>
        }
      </div>
    </DeliveryDetailsContainer>
  )
}