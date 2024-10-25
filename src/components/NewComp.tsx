import React from "react";

const NewComp = ({ header, content, image }: any) => {
  return (
    <div>
      <div className="border flex flex-col gap-3 rounded-lg border-black p-5 bg-white">
        <div className="font-bold text-[20px]">{header}</div>
        <div className="font-medium">{content}</div>
        <div>
          {image && <img src={image} alt="id" className="rounded-xl" />}
        </div>
      </div>
    </div>
  );
};

export default NewComp;
