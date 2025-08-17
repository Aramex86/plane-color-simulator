import type { CSSProperties } from "react";
interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function LeftWing3({
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
      onDrop={(e) => onDrop(e, "planeLeftWing1.2")}
      onDragOver={onDragOver}
      style={{ ...styles }}
    >
      <path stroke="#000" d="M78.5 1 4 4.5 1 92h77.5z" />
    </svg>
  );
}
