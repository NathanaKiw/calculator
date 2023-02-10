import { CalculatorBody } from "./components/CalculatorBody";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        overflow:"hidden",
        marginTop: "-8px",
        marginLeft: "-8px",
        height: "100vh",
        background: "linear-gradient(180deg,#462878 0%, #807ECE 100%) ",
      }}
    >
      <CalculatorBody />
    </div>
  );
}

export default App;
