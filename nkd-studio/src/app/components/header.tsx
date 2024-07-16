
import Logo from './logo';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Logo />
        <ul className="main-menu">
          <li><a>Services</a></li>
          <li><a>Work</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
