import ThemeToggler from "../../shared/ui/Button/ThemeToggler"
function Header() {
  return (
    <header className="app-header">
      <h1>My Home Work</h1>
      <ThemeToggler/>
      {/* <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
      </nav> */}
    </header>
  );
};

export default Header;