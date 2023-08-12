import NavItem from './nav-item'
import Dev from './dev'

export default function Header() {
  return (
    <div className="container-fluid">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Dev />
        <ul className="nav nav-pills border-bottom-dark">
          <NavItem heading="Home" link="/" />
          <NavItem heading="About" link="/about" />
          <NavItem heading="Contact" link="/contact" />
          <NavItem heading="Compose" link="/compose" />
        </ul>
      </header>
    </div>
  );
}
