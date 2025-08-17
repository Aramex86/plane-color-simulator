import type { CSSProperties } from "react";

interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function RightWingTail2({
  styles,
  onDrop,
  onDragOver,
  bgColor,
}: RightWing1Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={119}
      height={39}
      fill={bgColor}
      onDrop={(e) => onDrop(e, "planeRightWingTail2")}
      onDragOver={onDragOver}
      style={{ ...styles }}
    >
      <path
        stroke="#000"
        d="M1.5 3.5s-.51 26.427 0 30-5.5 5.947 20.5 3 35.856-1.28 59.5-5.5c.607.507 29.76-3.943 32-4s4-1 4-15.5.911-9.075 0-10z"
      />
    </svg>
  );
}
