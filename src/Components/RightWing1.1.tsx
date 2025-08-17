import type { CSSProperties } from "react";
interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function RightWing2({
  bgColor,
  onDrop,
  onDragOver,
  styles,
}: RightWing1Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={76}
      height={89}
      fill={bgColor}
      onDrop={(e) => onDrop(e, "planeRightWing1.1")}
      onDragOver={onDragOver}
      style={{ ...styles }}
    >
      <path stroke={"#000"} d="M72.533 6.529 1 1.5l2.467 87H75z" />
    </svg>
  );
}
