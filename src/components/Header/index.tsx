import { CartContainer, CartProductCounter, HeaderContainer, LocationContainer } from "./styles";
import logo from '../../assets/logo.svg'
import mapPin from '../../assets/map-pin.svg'
import cart from '../../assets/cart.svg'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";

export function Header() {
  const { cartProducts } = useContext(CartContext)
  
  const [cartProductsAmount, setCartProductsAmount] = useState(0)

  useEffect(() => {
    const productsAmount = cartProducts.reduce((acc, product) => acc + product.amount, 0)
    setCartProductsAmount(productsAmount)
  }, [cartProducts])

  return (
    <HeaderContainer>
      <NavLink to="/">
       <img src={logo} alt="" />
      </NavLink>
      <div>
        <LocationContainer>
          <img src={mapPin} alt="Ícone indicando a localização do cliente." />
          Porto Alegre, RS
        </LocationContainer>
        <NavLink to={cartProducts.length <= 0 ? "#" : "/cart"}>
          <CartContainer>
            <img src={cart} alt="Ícone do carrinho de compras." />
            {cartProducts.length > 0 && <CartProductCounter> {cartProductsAmount} </CartProductCounter>}
          </CartContainer>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}