import type { CSSProperties } from "react";

interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function RightWingTail1({
  styles,
  onDrop,
  onDragOver,
  bgColor,
}: RightWing1Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={116}
      height={34}
      fill={bgColor}
      onDrop={(e) => onDrop(e, "planeRightWingTail1")}
      onDragOver={onDragOver}
      style={{ ...styles }}
    >
      <path stroke="#000" d="M1 33.5v-32l51 6 55.5 7 8 5.5v13.5z" />
    </svg>
  );
}
