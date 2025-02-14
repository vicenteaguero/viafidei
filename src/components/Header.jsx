// src/components/Header.jsx

const Header = () => {
  return (
    <div className="header-container no-select">
      <img src="/img/logo.png" alt="Via Fidei" className="header-logo" />
      <div className="header-text">
        <h1 className="title">
          <span className="via">Via</span> <span className="fidei">Fidei</span>
        </h1>
        <h2 className="subtitle">El camino de la fe</h2>
      </div>
    </div>
  );
};

export default Header;
