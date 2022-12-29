import { BannerContainer, BannerContainerContent, LeftContentBannerContainer } from "./styles";

import caffeeBanner from '../../assets/caffee-banner.png'
import bannerBg from '../../assets/banner-bg.png'
import roundBox from '../../assets/round-box.svg'
import roundCaffee from '../../assets/round-caffee.svg'
import roundCart from '../../assets/round-cart.svg'
import roundTimer from '../../assets/round-timer.svg'

export function Banner() {
  return (
    <BannerContainer>
      <img src={bannerBg} alt="" />
      <BannerContainerContent>
        <LeftContentBannerContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1> 
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

          <section>
            <div>
              <img src={roundCart} alt="Ícone de compra simples e segura, um carrinho de compras." />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <img src={roundBox} alt="Ícone de compra simples e segura, um carrinho de compras." />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <img src={roundTimer} alt="Ícone de compra simples e segura, um carrinho de compras." />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <img src={roundCaffee} alt="Ícone de compra simples e segura, um carrinho de compras." />
              <span>O café chega fresquinho até você</span>
            </div>
          </section>
        </LeftContentBannerContainer>
        <div>
          <img src={caffeeBanner} alt="Banner Café delivery, um copo de café para viagem." />
        </div>
      </BannerContainerContent>
    </BannerContainer>
  )
}