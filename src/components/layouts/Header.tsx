const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full flex justify-center p-4 backdrop-blur shadow-xl border-b">
      <nav className="container h-full flex items-center justify-between">
        <div className="flex items-end">
          <img src="/logo-fix.svg" alt="filma-score" className="h-15 w-15" />
          <p className="font-semibold tracking-tight size-5 w-auto -ml-3">ilma Score</p>
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
