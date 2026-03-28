import IdeaLogo from "../../assets/IdeaLogo.svg";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex gap-5 w-full h-full p-5 place-items-center">
        <div className="flex item-center justify-center rounded-full">
          <img className="size-20 transition-all duration-300
              hover:drop-shadow-[0_0_16px_white]" src={IdeaLogo} alt="Idea Board Logo" />
        </div>
        <h1 className=" text-gray-50 text-3xl font-bold">Idea Baord</h1>
      </div>
    </div>
  );
};

export default Header;
