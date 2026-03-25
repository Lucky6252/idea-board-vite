import './header.styles.css'
import IdeaLogo from '../../assets/IdeaLogo.svg'

const Header = () => {
  return (
    <div className="w-full h-30">
      <div className="flex gap-5">
        <img className="size-40"src={IdeaLogo} alt='Idea Board Logo'/>
        <h1 className='text-gray-50 text-3xl font-bold'>Idea Baord</h1>
      </div>
    </div>
  );
};

export default Header;
