const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full flex justify-center p-4 backdrop-blur shadow-xl border border-b">
      <nav className="container h-full flex items-center justify-between">
        <div>
          <img src="/logo-darkmode.svg" alt="filma-score" className="h-15 w-15" />
        </div>
        <div className="flex gap-4">
          <p>Home</p>
          <p>Film</p>
          <p>About Us</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
