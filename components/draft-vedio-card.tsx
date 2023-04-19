import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";

type prop = {
  url: string;
  onRemove: () => void;
};
export default function DraftVedio({ url, onRemove }: prop) {
  return (
    <div className="relative flex m-2">
      <div className="absolute z-10 right-0 top-0 bg-white rounded-full overflow-hidden">
        <FaRegTimesCircle size={28} onClick={() => onRemove()} />
      </div>
      <video muted controls>
        <source src={url} key={url} />
      </video>
    </div>
  );
}
