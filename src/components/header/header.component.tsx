import IdeaLogo from '../../assets/IdeaLogo.svg'

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex gap-5 w-full h-full p-5 place-items-center">
        <div className='flex item-center justify-center rounded-full shadow-xl hover:shadow-neutral-300'>
        <svg className=" w-24 h-24 text-blue-600" viewBox='0 0 24 24' fill='none' stroke='currentColor'>
          <path className='fill-current ' d='M12 2a5 5 0 0 0-5 5c0 1.25.5 2.39 1.34 3.25L10 12v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l1.66-1.75A4.95 4.95 0 0 0 17 7a5 5 0 0 0-5-5Z'/>
          <path className='stroke-current text-blue-50' d='M10 16v2a2 2 0 0 0 4 0v-2' />
          <line className='stroke-current text-blue-50' x1='9' y1='18' x2='15' y2='18' />
        </svg>
        </div>
        <h1 className=' text-gray-50 text-3xl font-bold'>Idea Baord</h1>
      </div>
    </div>
  );
};

export default Header;
