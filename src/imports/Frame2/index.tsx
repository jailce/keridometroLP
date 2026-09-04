import imgImage1 from "./6955c69ac11c2d0faa812209cb1aeeaf0fafca85.png";
import imgImage2 from "./fc125fe2c31feb00949eb7c3e032eb42d3cd6567.png";

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[1331px] left-0 top-0 w-[2828px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="-translate-x-1/2 absolute h-[1244px] left-[calc(50%+1.5px)] top-[1331px] w-[2831px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}