import { FieldError, UseFormRegister } from 'react-hook-form'

export interface QRFormInputs {
  url: string
  size: '128' | '256' | '512' | '1024'
}

export interface FormInputProps {
  label: string
  placeholder?: string
  type?: string
  register: ReturnType<UseFormRegister<any>>
  error?: FieldError
}

type SelectOptionProps = {
  label: string
  value: string
}

export interface FormSelectProps extends FormInputProps {
  options: SelectOptionProps[]
}
