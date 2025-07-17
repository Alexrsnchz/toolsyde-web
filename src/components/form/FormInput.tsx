import type { FormInputProps } from '@customTypes/types.ts'

const FormInput = ({
  label,
  placeholder,
  type = 'text',
  register,
  error,
  dataCy,
}: FormInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        data-cy={dataCy}
        className="text-sm p-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
      />
      {error && <span className="text-xs text-red-500">{error.message}</span>}
    </div>
  )
}

export default FormInput
