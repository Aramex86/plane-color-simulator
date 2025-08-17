import type { CSSProperties } from "react";
interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function LeftWing1({
  bgColor,
  onDrop,
  onDragOver,
  styles,
}: RightWing1Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={92}
      fill={bgColor}
      onDrop={(e) => onDrop(e, "planeLeftWing1")}
      onDragOver={onDragOver}
      style={{ ...styles }}
    >
      <path
        stroke="#000"
        fill={bgColor}
        d="M16 0c-3.184.817-4.467 1.542-5.5 3.5-1.523 2.953-2.02 4.72-2.5 8L5.5 31 1 74.5 0 83c.99 3.746 2.154 5.128 5.5 6l7.5 1.5 8.5 1V89l2-89z"
      />
    </svg>
  );
}
