import Link from 'next/link'

export default function Dev() {
  return (
    <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"></svg>
      <span className="fs-4">/* Dev */</span>
    </Link>
  )
} 
