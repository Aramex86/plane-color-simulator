import { useState } from "react";
import "./App.css";
import RightWing1 from "./Components/RightWing1";
import RightWing2 from "./Components/RightWing1.1";
import RightWing3 from "./Components/RightWing1.2";
import RightWing4 from "./Components/RightWing1.3";
import RightWing5 from "./Components/RightWing1.4";
import LeftWing1 from "./Components/LeftWing1";
import LeftWing2 from "./Components/LeftWing1.1";
import LeftWing3 from "./Components/LeftWing1.2";
import LeftWing4 from "./Components/LeftWing1.3";
import LeftWing5 from "./Components/LeftWing1.4";
import PlaneBody from "./Components/planeBody";
import RightWingTail1 from "./Components/RightWingTail1";
import RightWingTail2 from "./Components/RightWingTail2";
import LeftWingTail2 from "./Components/LeftWingTail2";
import LeftWingTail1 from "./Components/LeftWingTail1";
// Adjust the path according to your image location
const App = () => {
  const [colors, setColors] = useState({
    planeBody: "#f0f0f0",
    planeRightWing1: "#f0f0f0",
    "planeRightWing1.1": "#f0f0f0",
    "planeRightWing1.2": "#f0f0f0",
    "planeRightWing1.3": "#f0f0f0",
    "planeRightWing1.4": "#f0f0f0",
    planeLeftWing1: "#f0f0f0",
    "planeLeftWing1.1": "#f0f0f0",
    "planeLeftWing1.2": "#f0f0f0",
    "planeLeftWing1.3": "#f0f0f0",
    "planeLeftWing1.4": "#f0f0f0",
    planeRightWingTail1: "#f0f0f0",
    planeRightWingTail2: "#f0f0f0",
    planeLeftWingTail2: "#f0f0f0",
    planeLeftWingTail1: "#f0f0f0",
  });

  const [draggedColor, setDraggedColor] = useState<string | null>(null);

  const colorPalette = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E9",
    "#F8C471",
    "#82E0AA",
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragStart = (e: any, color: string) => {
    setDraggedColor(color as string);
    e.dataTransfer?.setData("text/plain", color);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragOver = (e: any) => {
    e.preventDefault();

    // const element = e.target;

    // console.log(e.target, "dragOverElement");

    // if (element.tagName.toLowerCase() === "path") {
    //   element.classList.remove("dragging");
    //   element.addEventListener("dragover", () => {
    //     element.classList.add("dragging"); // Toggling twice to make sure the class is added or removed
    //   });
    //   console.log(element, "draggingElement");
    // }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDrop = (e: any, part: string) => {
    e.preventDefault();
    if (draggedColor) {
      setColors((prev) => ({
        ...prev,
        [part]: draggedColor,
      }));
    }
  };

  const resetColors = () => {
    setColors({
      planeBody: "#f0f0f0",
      planeRightWing1: "#f0f0f0",
      "planeRightWing1.1": "#f0f0f0",
      "planeRightWing1.2": "#f0f0f0",
      "planeRightWing1.3": "#f0f0f0",
      "planeRightWing1.4": "#f0f0f0",
      planeLeftWing1: "#f0f0f0",
      "planeLeftWing1.1": "#f0f0f0",
      "planeLeftWing1.2": "#f0f0f0",
      "planeLeftWing1.3": "#f0f0f0",
      "planeLeftWing1.4": "#f0f0f0",
      planeRightWingTail1: "#f0f0f0",
      planeRightWingTail2: "#f0f0f0",
      planeLeftWingTail2: "#f0f0f0",
      planeLeftWingTail1: "#f0f0f0",
    });
  };

  const styles = {
    colorSwatch: {
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      cursor: "grab",
      boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
      transition: "all 0.2s ease",
    },

    dragColor: {
      width: "28px",
      height: "28px",
      borderRadius: "50%",
    },
  };

  return (
    <div className="container">
      <div className="mainLayout">
        <div className="shapesContainer">
          <div className="shapesArea" onDragOver={handleDragOver}>
            <div className="right-wing">
              <RightWing5
                bgColor={colors["planeRightWing1.4"]}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  left: "-14px",
                  top: "91px",
                  rotate: "-1deg",
                  width: "220px",
                  zIndex: 1,
                }}
              />

              <RightWing4
                bgColor={colors["planeRightWing1.3"]}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  left: "-22px",
                  top: "-4px",
                  rotate: "-1deg",
                }}
              />
              <RightWing3
                bgColor={colors["planeRightWing1.2"]}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  left: "56px",
                  top: "-1px",
                  rotate: "-1deg",
                }}
              />
              <RightWing2
                bgColor={colors["planeRightWing1.1"]}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  left: "130px",
                  top: "2px",
                  rotate: "-1deg",
                }}
              />
              <RightWing1
                bgColor={colors.planeRightWing1}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  left: "202px",
                  top: "6px",
                  rotate: "-1deg",
                }}
              />
            </div>
            <PlaneBody />
            <div className="left-wing">
              <LeftWing5
                bgColor={colors["planeLeftWing1.4"]}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  right: "53px",
                  top: "80px",
                  rotate: "-1deg",
                  zIndex: 1,
                }}
              />
              <LeftWing4
                bgColor={colors["planeLeftWing1.3"]}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  right: "48px",
                  top: "-17px",
                  rotate: "-1deg",
                }}
              />
              <LeftWing3
                bgColor={colors["planeLeftWing1.2"]}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  right: "127px",
                  top: "-11px",
                  rotate: "-1deg",
                }}
              />
              <LeftWing2
                bgColor={colors["planeLeftWing1.1"]}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  right: "202px",
                  top: "-6px",
                  rotate: "-1deg",
                }}
              />
              <LeftWing1
                bgColor={colors["planeLeftWing1"]}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  right: "274px",
                  top: "0px",
                  rotate: "-1deg",
                }}
              />
            </div>
            <div className="right-tail">
              <RightWingTail2
                bgColor={colors.planeRightWingTail2}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  left: "-1px",
                  top: "39px",
                  rotate: "0deg",
                }}
              />
              <RightWingTail1
                bgColor={colors.planeRightWingTail1}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  left: "-1px",
                  top: "7px",
                  rotate: "-1deg",
                }}
              />
            </div>
            <div className="left-tail">
              <LeftWingTail2
                bgColor={colors.planeLeftWingTail2}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  right: "15px",
                  top: "41px",
                  rotate: "-2deg",
                }}
              />
              <LeftWingTail1
                bgColor={colors.planeLeftWingTail1}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                styles={{
                  position: "absolute",
                  left: "-133px",
                  top: "9px",
                  rotate: "-1deg",
                }}
              />
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="paletteContainer">
          <h2 className="paletteTitle">Color Palette</h2>
          <div className="colorGrid">
            {colorPalette.map((color, index) => (
              <div
                key={index}
                style={{
                  ...styles.colorSwatch,
                  backgroundColor: color,
                }}
                draggable
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onDragStart={(e: any) => handleDragStart(e, color)}
              />
            ))}
          </div>
          <button onClick={resetColors} className="resetButton">
            Reset All
          </button>
        </div>
      </div>

      {draggedColor && (
        <div className="dragIndicator">
          <div
            style={{
              ...styles.dragColor,
              backgroundColor: draggedColor,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default App;
