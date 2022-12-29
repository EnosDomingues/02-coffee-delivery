import { CompleteYourOrder } from "../../components/CompleteYourOrder";
import { Header } from "../../components/Header";
import { Payment } from "../../components/Payment";
import { SelectedCoffees } from "../../components/SelectedCoffees";
import { CartContainer, CartMainSection } from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { Navigate, redirect } from "react-router-dom";

export interface Product {
  img: string
  title: string
  description: string
  tags: string[]
  price: number
}

const newOrderValidationSchema = zod.object({
  cep: zod.string().min(1, "Campo obrigatório"),
  address: zod.string().min(1, "Campo obrigatório"),
  number: zod.string().min(1, "Campo obrigatório"),
  complement: zod.string().optional(),
  district: zod.string().min(1, "Campo obrigatório"),
  city: zod.string().min(1, "Campo obrigatório"),
  uf: zod.string().min(1, "Campo obrigatório"),
  payment: zod.string().min(1, "Campo obrigatório"),
})

type NewOrderFormData = zod.infer<typeof newOrderValidationSchema>

export function Cart() {

  const { userOrder, setUserOrder } = useContext(OrderContext)

  const methods = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderValidationSchema),
  })

  function handleCreatenewOrder(data: any) {
    setUserOrder(data)
    console.log(data)
  }

  return (
    <CartContainer>
      {userOrder.payment && <Navigate replace to="/success" />}
      <Header />
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleCreatenewOrder)}>
          <CartMainSection>
            <CompleteYourOrder/>
            <Payment />
          </CartMainSection>
        <SelectedCoffees />
      </form>
      </FormProvider>

    </CartContainer>
  )
}