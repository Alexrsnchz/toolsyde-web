import { Tool } from '@customTypes/types'
import { Link } from 'react-router'

export default function ToolCard({
  title,
  description,
  icon: Icon,
  color,
  stats,
  category,
  features,
  slug,
}: Tool) {
  return (
    <Link
      to={`${category.toLowerCase()}/${slug}`}
      aria-label={`Go to ${title} tool page`}
    >
      <article className="flex flex-col gap-4 border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md hover:cursor-pointer hover:-translate-y-1 transition-all duration-200">
        <header className="flex items-center gap-3">
          <div className={`p-3 rounded-lg ${color}`}>
            <Icon className="size-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-base">{title}</h3>
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full border border-gray-200 px-2 font-semibold">
                {category}
              </span>
              <span className="text-gray-600">{stats}</span>
            </div>
          </div>
        </header>

        <p className="text-xs text-gray-600">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <li
              key={`${feature}-${index}`}
              className="rounded-full bg-gray-100 text-xs px-2 py-1 font-semibold"
            >
              {feature}
            </li>
          ))}
        </ul>
      </article>
    </Link>
  )
}
