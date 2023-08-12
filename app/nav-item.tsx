import Link from 'next/link'

export interface NavItemProps {
  heading: string
  link: string
}

export default function NavItem({ heading, link }: NavItemProps) {
  return (
    <li className="nav-item">
      <Link href={link} className="nav-link">
        {heading}
      </Link>
    </li>
  );
}
