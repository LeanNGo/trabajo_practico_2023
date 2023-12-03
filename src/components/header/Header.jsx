import React from 'react';

const Header = ({logo}) => {
  return (
    <div>
        <header>
            <nav><button className="menu">≡</button><img src={logo} alt="logo" className="logo" /><button>🔍</button><button>⋯</button></nav>
        </header>
    </div>
  )
}

export default Header