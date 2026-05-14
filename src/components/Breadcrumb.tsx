import { Link } from 'react-router-dom';

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-[0.72rem] uppercase tracking-wider text-[#7a756e] flex items-center gap-2 mb-8">
      <Link to="/" className="hover:text-[#f3ede0] transition-colors">Home</Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-2">
          <span className="text-[#c9a96e]">/</span>
          {item.href ? (
            <Link to={item.href} className="hover:text-[#f3ede0] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#f3ede0] font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
