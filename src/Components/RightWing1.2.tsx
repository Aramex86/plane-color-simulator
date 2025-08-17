import type { CSSProperties } from "react";
interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function RightWing3({
  bgColor,
  onDrop,
  onDragOver,
  styles,
}: RightWing1Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={79}
      height={93}
      fill={bgColor}
      style={{ ...styles }}
      onDrop={(e) => onDrop(e, "planeRightWing1.2")}
      onDragOver={onDragOver}
    >
      <path stroke={"#000"} d="M.5 1.5 75 5l3 87.5H.5z" />
    </svg>
  );
}
