const calculatorItens: Array<string> = [
  "CE",
  "C",
  "%",
  "/",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "+/-",
  "0",
  ",",
  "=",
];

export function Keyboard() {
  return (
    <div
      style={{
        width: "16.5em",
        padding: "0.2em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {calculatorItens.map((item, index) => {
        if(index == 0 ){
          return(
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(255, 255, 255, 0.05))",
                fontFamily: "'Rubik', sans-serif",
                color: "#7F45E2",
                margin: "0.4em",
                padding: "0.4em",
                borderRadius: "1000px",
                height: "30px",
                width: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow:
                  "1px 1px 3px black,-0.5px -1px 2px  rgba(255, 255, 255, 0.3)",
              }}>{item}
              </div>
          )
        }
        if (index == 3 || index == 7 || index == 11 || index == 15) {
          return (
            <div
            key={index}
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%), #462878",
                fontFamily: "'Rubik', sans-serif",
                color: "#EBEBEB",
                margin: "0.4em",
                padding: "0.4em",
                borderRadius: "1000px",
                height: "30px",
                width: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow:
                  "1px 1px 3px black,-0.5px -1px 1px  rgba(255, 255, 255, 0.3)",
              }}
            >
              {item}
            </div>
          );
        }
        if (index == 19) {
          return (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%), #7F45E2",
                fontFamily: "'Rubik', sans-serif",
                color: "#EBEBEB",
                margin: "0.4em",
                padding: "0.4em",
                borderRadius: "1000px",
                height: "30px",
                width: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow:
                  "1px 1px 3px black,-0.5px -1px 1px  rgba(255, 255, 255, 0.3)",
              }}
            >
              {item}
            </div>
          );
        } else {
          return (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(255, 255, 255, 0.05))",
                fontFamily: "'Rubik', sans-serif",
                color: "#EBEBEB",
                margin: "0.4em",
                padding: "0.4em",
                borderRadius: "1000px",
                height: "30px",
                width: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow:
                  "1px 1px 3px black,-0.5px -1px 2px  rgba(255, 255, 255, 0.3)",
              }}
            >
              {item}
            </div>
          );
        }
      })}
    </div>
  );
}
