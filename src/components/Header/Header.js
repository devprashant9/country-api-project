function Header({ mode, handleClick }) {
  return (
    <>
      <header className={`header-container ${mode}`}>
        <div className="header-content">
          <h2 className="title">Where in the world?</h2>
          <div className="icon" onClick={handleClick}>
            {mode ? (
              <i className="fa-regular fa-sun"></i>
            ) : (
              <i className="fa-regular fa-moon"></i>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
