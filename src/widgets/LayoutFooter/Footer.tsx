import AboutUsModal from "./AboutUsModal";
function Footer () {
  return (
    <footer className="app-footer">
      <AboutUsModal/>
      <p>&copy; {new Date().getFullYear()} My Company</p>
    </footer>
  );
};

export default Footer;