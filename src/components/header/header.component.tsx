import './header.styles.css'
import IdeaLogo from '../../assets/IdeaLogo.svg'

const Header = () => {
  return (
    <div className="header-container">
      <div className='logo-container'>
        <img src={IdeaLogo} alt='Idea Board Logo'/>
        <h1>Idea Baord</h1>
      </div>
    </div>
  );
};

export default Header;
