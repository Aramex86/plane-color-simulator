import type { CSSProperties } from "react";
interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function RightWing1({
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
      onDrop={(e) => onDrop(e, "planeRightWing1")}
      onDragOver={onDragOver}
      style={{ ...styles }}
    >
      <path
        stroke={"#000"}
        d="M8 .5c3.185.817 4.467 1.542 5.5 3.5 1.523 2.953 2.02 4.72 2.5 8l2.5 19.5L23 75l1 8.5c-.99 3.746-2.154 5.128-5.5 6L11 91l-8.5 1v-2.5L.5.5z"
      />
    </svg>
    // <img
    //   src={RightWing}
    //   alt="Right Wing"
    //   style={{ ...styles, backgroundColor: bgColor, overflow: "hidden" }}

    // />
  );
}
