import { InputHTMLAttributes } from "react";
import { InputTextContianer, StyledInputText } from "./styles";
import { useFormContext } from "react-hook-form";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  id: string
}

export function InputText({ type, placeholder, optional=false, id }: InputTextProps) {
  const { register } = useFormContext()

  return (
    <InputTextContianer id={id}>
      <StyledInputText type={type} placeholder={placeholder} {...register(id)}/>
      {optional && <span>Opcional</span>}
    </InputTextContianer>
  )
}