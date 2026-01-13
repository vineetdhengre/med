import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TfiHeart, TfiHome, TfiSearch, TfiUser } from "react-icons/tfi";
import './Header.css'
import logo from '../../assets/medsphere.png'


export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getActiveNav = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/main-app') return 'main-app';
    if (path === '/login') return 'login';
    return 'home';
  };

  const [activeNav, setActiveNav] = useState(getActiveNav());

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveNav('home');
    else if (path === '/main-app') setActiveNav('main-app');
    else if (path === '/login') setActiveNav('login');
    else setActiveNav('home');
  }, [location.pathname]);

  const handleNavClick = (navItem : any, path: string) => {
    setActiveNav(navItem);
    navigate(path);
  };

  return (
    <div className="header-container">
      <div className="header-nav">
        <div className="header-brand">
          <span className="brand-name"><img src={logo} alt="logo" style={{ width: '300px' }} /></span>
        </div>
        <div className="header-nav-icons">
          <button 
            className={`header-nav-icon ${activeNav === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home', '/')}
            aria-label="Home"
            title="Home"
          >
            <TfiHome style={{ width: '22px' , height: '22px' }} />
          </button>
          <button 
            className={`header-nav-icon ${activeNav === 'search' ? 'active' : ''}`}
            onClick={() => handleNavClick('search', '#')}
            aria-label="Search"
            title="Search"
          >
            <TfiSearch style={{ width: '22px' , height: '22px' }} />
          </button>
          <button 
            className={`header-nav-icon ${activeNav === 'likes' ? 'active' : ''}`}
            onClick={() => handleNavClick('likes', '#')}
            aria-label="Likes"
            title="Likes"
          >
            <TfiHeart style={{ width: '22px' , height: '22px' }} />

          </button>
          <button 
            className={`header-nav-icon ${activeNav === 'login' ? 'active' : ''}`}
            onClick={() => handleNavClick('login', '/login')}
            aria-label="Login"
            title="Login"
          >
            <TfiUser style={{ width: '22px' , height: '22px' }} />

          </button>
        </div>
      </div>
    </div>
  )
}
