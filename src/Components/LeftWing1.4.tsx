import type { CSSProperties } from "react";
interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function LeftWing5({
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
      onDrop={(e) => onDrop(e, "planeLeftWing1.4")}
      onDragOver={onDragOver}
      style={{ ...styles }}
    >
      <path
        stroke="#000"
        d="M222 4.5V34h-10.5L186 31.5 149.5 27l-42-5L68 18l-40.5-4.5L1 10V.5h1l70.5 1h77l70.5 2z"
      />
    </svg>
  );
}
