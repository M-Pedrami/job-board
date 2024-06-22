import { FaRegHeart } from "react-icons/fa6";


const JobRow = () => {
  return (
    <div className="flex gap-4  bg-white p-4 rounded-md shadow-sm relative">
      <button> <FaRegHeart className="absolute right-2 top-2"/></button>
      <div className="content-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      <div className="sm:flex grow ">
        <div className="grow">
          <div className="text-gray-500 text-sm">Spotify</div>
          <div className="font-bold">Product Designer</div>

          <div className="text-gray-400 text-xs">
            Remote &middot; New York, US &middot; Full Time
          </div>
        </div>
        <div className=" content-end text-gray-500 text-sm">
          2 weeks ago
        </div>
      </div>
    </div>
  );
};
export default JobRow;
