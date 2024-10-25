import pix from "../assets/envatologo-removebg-preview.png";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const data = [
    { id: 1, title: "stock video" },
    { id: 2, title: "video Templates" },
    { id: 3, title: "Music" },
    { id: 4, title: "sound Effects" },
    { id: 5, title: "Graphic Templates" },
    { id: 6, title: "Graphics" },
    { id: 6, title: "Presentation Templates" },
    { id: 6, title: "photos" },
    { id: 6, title: "Fonts" },
    { id: 6, title: "Addd-ons" },
    { id: 6, title: "More" },
  ];
  return (
    <div>
      <div className="w-full h-[10vh] bg-black flex items-center justify-center ">
        {/* Header wrapper */}
        <div className="w-[95%] h-full  flex justify-between">
          {/* logo */}
          <div className=" w-[15%] h-full  flex items-center ">
            <img src={pix} alt="image" className="w-[90%] h-[90%]" />
          </div>
          <div className="w-[50%] h-full  flex items-center  rounded-3xl">
            <div className="w-[90%] h-[70%]  flex items-center bg-[#383838] rounded-3xl gap-5">
              <div>
                <p className="text-white ml-3 text-[12px] flex gap-3 items-center">
                  All items{" "}
                  <span>
                    <FaAngleDown />
                  </span>
                </p>
              </div>
              <div className="w-[1px] h-[50%] bg-slate-600"></div>
              <div>
                <FaSearch className="text-white" />
              </div>
              <div>
                <input
                  className="w-[400px] rounded-3xl bg-[#383838] h-[40px]"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          {/* navs */}
          <div className="w-[32%] h-full flex items-center gap-5">
            <nav className="text-white cursor-pointer">License</nav>
            <nav className="text-white cursor-pointer">Pricing</nav>
            <button className="w-[250px] h-[65%] bg-[#9cee68] text-black rounded-md font-semibold">
              Get unlimited downloads
            </button>
            <button className="text-white">sign in</button>
          </div>
        </div>
      </div>
      <div className="w-full h-[7vh] bg-black flex justify-center">
        <div className="w-[95%] h-full  flex justify-between">
          <div className="w-[77%] h-full text-white flex items-center text-[12px] ml-5 cursor-pointer">
            {data.map((el) => el.title)}
          </div>
          <div className="w-[10%] h-full  flex gap-10 justify-end items-center">
            <div className="w-[1px] h-[50%] bg-stone-200"></div>
            <div className="text-white flex ">Learn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
