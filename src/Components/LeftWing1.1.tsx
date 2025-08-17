import type { CSSProperties } from "react";
interface RightWing1Props {
  bgColor: string;
  onDrop: (event: React.DragEvent<SVGSVGElement>, part: string) => void;
  onDragOver: React.DragEventHandler<SVGSVGElement>;
  styles?: CSSProperties;
}

export default function LeftWing2({
  bgColor,
  onDrop,
  onDragOver,
  styles,
}: RightWing1Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={75}
      height={92}
      fill={bgColor}
      onDrop={(e) => onDrop(e, "planeLeftWing1.1")}
      onDragOver={onDragOver}
      style={{ ...styles }}
    >
      <path stroke="#000" d="M3.467 6.029 75 1l-2.467 87H1z" />
    </svg>
  );
}
