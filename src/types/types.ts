import type * as React from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

export interface IconProps {
  id?: string
  className?: string
}

export interface Tool {
  title: string
  description: string
  icon: React.ComponentType<IconProps>
  color: string
  stats: string
  category: string
  features: string[]
  slug: string
}

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
