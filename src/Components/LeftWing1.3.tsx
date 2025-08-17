import type { CSSProperties } from "react";
interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function LeftWing4({
  bgColor,
  onDrop,
  onDragOver,
  styles,
}: RightWing1Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={80}
      height={127}
      fill={bgColor}
      onDrop={(e) => onDrop(e, "planeLeftWing1.3")}
      onDragOver={onDragOver}
      style={{ ...styles }}
    >
      <path stroke="#000" d="M73 99v27.5h6V1L1 5.5V97z" />
    </svg>
  );
}
