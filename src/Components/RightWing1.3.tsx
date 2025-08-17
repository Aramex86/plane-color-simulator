import type { CSSProperties } from "react";
interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function RightWing4({
  bgColor,
  onDrop,
  onDragOver,
  styles,
}: RightWing1Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={79}
      height={128}
      fill={bgColor}
      style={{ ...styles }}
      onDrop={(e) => onDrop(e, "planeRightWing1.3")}
      onDragOver={onDragOver}
    >
      <path stroke={"#000"} d="M6.5 99.5V127h-6V1.5l78 4.5v91.5z" />
    </svg>
  );
}
