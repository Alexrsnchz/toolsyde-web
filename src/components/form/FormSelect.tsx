import type { FormSelectProps } from '@customTypes/types.ts'

const FormSelect = ({
  label,
  options,
  placeholder,
  register,
  error,
}: FormSelectProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </label>
      <select
        {...register}
        className="text-sm p-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent bg-white"
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-red-500">{error.message}</span>}
    </div>
  )
}

export default FormSelect
