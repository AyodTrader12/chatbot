import { MdFileDownload } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import pix from "../assets/stock video img.jpg";
import NewComp from "../components/NewComp";
import pix1 from "../assets/banner.compressed-c1ef8a6a1d9615fd7a88 (1).avif";
import pix2 from "../assets/video-templates img.jpg";
import pix3 from "../assets/stock photos img.jpg";
import pix4 from "../assets/music-cover img.jpg";
import pix5 from "../assets/sound-effects img.jpg";
import pix6 from "../assets/graphic-templates img.jpg";
import pix7 from "../assets/fonts-cover img.avif";
import pix8 from "../assets/graphics-cover_692w-8326854fb208ae37edeb.jpg";
import pix9 from "../assets/3d.jpg";
import pix10 from "../assets/adds.avif";
import pix11 from "../assets/presentation-templates img.jpg";
import pix12 from "../assets/all categories.jpg";
import logos from "../assets/logos.png";
import Bot from "../components/Bot";
const Home = () => {
  //   const card = [
  //     {
  //       id: 1,
  //       Description: "stock video",
  //       title: "6.8M+",
  //       img: <img src={pix} />,
  //     },
  //     { id: 2, Description: "video Templates", title: "120,000+",img: <img src ={pix2}/>},
  //   ];
  return (
    <div className=" relative min-h-[calc(100vh-17vh)]">
      <div className="w-full h-[50vh] bg-[#fff5ec] flex items-center justify-center">
        {/* hero wrapper */}
        <div className="w-[95%] h-[90%]  rounded-md flex gap-5 items-center ">
          <div
            className="w-[75%] h-[95%] bg-black rounded-2xl"
            style={{
              backgroundImage: `url(${pix1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <p className="  text-[60px] ml-7 text-white font-black mt-7">
              <strong className="text-[60px] text-[#9cee68]  font-black ">
                Unlimited assets
              </strong>{" "}
              for the
            </p>
            <p className="font-black text-white   ml-7 text-[60px]">
              {" "}
              creatively obsessed
            </p>
            <p className="font-semibold text-[30px] text-white ml-7">
              Access the broadest range of asset categories in one place
            </p>
          </div>
          <div className="w-[25%] h-[95%] bg-white border rounded-2xl">
            <div className="flex flex-col gap-0 ">
              <p className="text-[20px] mt-7 ml-7">From</p>
              <p className="ml-7">
                <span className="text-[25px] font-semibold">$16.50</span>/month
              </p>
              <p className="ml-7 text-gray-400 font-normal mb-3">
                cancel any time
              </p>
            </div>
            <div className="mb-4">
              <p className="flex gap-4 items-center text-[17px] ml-7 mb-1">
                <span className="font-bold">
                  <MdFileDownload />
                </span>
                Unlimites downloads
              </p>
              <p className="flex gap-4 items-center text-[17px] ml-7 mb-1">
                <span className="font-bold">
                  <GiAchievement />
                </span>
                20+ million premium assets
              </p>
              <p className="flex gap-4 items-center text-[17px] ml-7">
                <span className="font-bold">
                  <MdVerified />
                </span>
                Lifetime commercial license
              </p>
            </div>
            <button className="bg-[#9cee68] text-black h-[15%] w-[250px] ml-7 rounded-md font-semibold">
              Get unlimited downloads
            </button>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="w-full h-[100%] bg-[#fff5ec] flex justify-center">
        <div className="w-[95%] h-[1350px]  rounded-md  grid grid-cols-4 gap-10">
          <NewComp header={"Stock Video"} content={"6.8M+"} image={pix} />
          <NewComp
            header={"Video Template"}
            content={"120,000+"}
            image={pix2}
          />
          <NewComp header={"stock photos"} content={"11.2M+"} image={pix3} />
          <NewComp
            header={"Royalty-Free music"}
            content={"210,000+"}
            image={pix4}
          />
          <NewComp header={"sound Effects"} content={"770,000+"} image={pix5} />
          <NewComp
            header={"Graphic Templates"}
            content={"330,000+"}
            image={pix6}
          />
          <NewComp header={"Fonts"} content={"56,000+"} image={pix7} />
          <NewComp header={"Graphics"} content={"210,000"} image={pix8} />
          <NewComp header={"3D"} content={"280,000+"} image={pix9} />
          <NewComp header={"Add-ons"} content={"28,000+"} image={pix10} />
          <NewComp
            header={"Presentation Templates"}
            content={"150,000+"}
            image={pix11}
          />
          <NewComp header={"All categories"} content={"20.3M+"} image={pix12} />
        </div>
      </div>
      <div className="bg-[#fff5ec] w-full h-[50vh] flex items-center justify-center">
        <div className="w-[60%] h-[70%] ">
          <h1 className="font-bold text-[30px] text-center mb-3 mt-9">
            Trusted by top brands
          </h1>
          <div className="w-[90%] h-[50%]  ml-20">
            <img src={logos} alt="img" />
          </div>
        </div>
      </div>
      <div className="top-0 right-10 bottom-0 fixed">
        <Bot />
      </div>
    </div>
  );
};

export default Home;
