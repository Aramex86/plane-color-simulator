import type { CSSProperties } from "react";
interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function RightWing5({
  bgColor,
  onDrop,
  onDragOver,
  styles,
}: RightWing1Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={223}
      height={35}
      fill={bgColor}
      style={{ ...styles }}
      onDrop={(e) => onDrop(e, "planeRightWing1.4")}
      onDragOver={onDragOver}
    >
      <path
        stroke={"#000"}
        d="M1 4.5V34h10.5L37 31.5 73.5 27l42-5 39.5-4 40.5-4.5L222 10V.5h-1l-70.5 1h-77L3 3.5z"
      />
    </svg>
  );
}
