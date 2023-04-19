import React, { MouseEventHandler } from "react";
import { AiFillFile } from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";
import { Document } from "@/types/feeds_type_model";
type prop = {
  doc: Document;
  onRemove: () => void;
};

export default function FileChip({ doc, onRemove }: prop) {
  return (
    <div className="border border-gray-300 py-1 px-2 flex flex-wrap justify-between items-center gap-3 mx-3 my-1">
      <div className="flex flex-wrap items-center gap-1">
        <AiFillFile size={26} color="rgb(0,0,0,0.4)" />
        <p className="text-xs text-green-500">{doc.name}</p>
      </div>
      <FaTimesCircle
        color="rgb(0,0,0,0.4)"
        size={12}
        onClick={() => onRemove()}
        className="cursor-pointer"
      />
    </div>
  );
}
