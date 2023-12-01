import React from 'react';

const Header = ({logo}) => {
  return (
    <div>
        <header>
            <nav><button class="menu">≡</button><img src={logo} alt="logo" class="logo" /><button>🔍</button><button>⋯</button></nav>
        </header>
    </div>
  )
}

export default Header