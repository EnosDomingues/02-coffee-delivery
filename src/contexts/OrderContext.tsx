import React, { useState } from 'react'
import { createContext, ReactNode, useReducer } from "react"

interface OrderContextProviderProps {
  children: ReactNode
}

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

interface OrderContextType {
  userOrder: Order
  setUserOrder: React.Dispatch<React.SetStateAction<Order>>
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children  }: OrderContextProviderProps) {
  const [userOrder, setUserOrder] = useState({} as Order)

  return (
    <OrderContext.Provider
      value={{
        userOrder,
        setUserOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}