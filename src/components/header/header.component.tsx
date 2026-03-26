import IdeaLogo from '../../assets/IdeaLogo.svg'

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex gap-5 w-full h-full p-5">
        <img className="size-30"src={IdeaLogo} alt='Idea Board Logo'/>
        <h1 className='mt-10 text-gray-50 text-3xl font-bold'>Idea Baord</h1>
      </div>
    </div>
  );
};

export default Header;
