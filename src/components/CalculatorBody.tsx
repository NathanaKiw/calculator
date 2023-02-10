import { Keyboard } from "./Keyboard";
import { Screen } from "./Screen";

export function CalculatorBody() {
  return (
    <div
      style={{
        position: "relative",
        top: "15%",
        left: "40%",
        background: "#2D2A37 ",
        borderRadius: "30px",
        height: "fit-content",
        width: "16.5em",
        paddingBottom: "1em",
        boxSizing: "border-box",
        boxShadow: "1px 1px 7px #2D2A37",
      }}
    >
      <Screen />
      <Keyboard />
    </div>
  );
}
