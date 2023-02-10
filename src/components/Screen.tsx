export function Screen() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          paddingRight: "2em",
          paddingTop: "2em",
          color: "#6B6B6B",
          display: "flex",
          flexDirection: "row-reverse",
          fontFamily: "'Rubik', sans-serif",
        }}
      >
        1 + 1
      </div>
      <div
        style={{
          paddingLeft: "2.2em",
          color: "#6B6B6B",
          fontFamily: "'Rubik', sans-serif",
        }}
      >
        =
      </div>
      <div
        style={{
          color: "#EBEBEB",
          display: "flex",
          flexDirection: "row-reverse",
          paddingRight: "1em",
          fontSize: "2.25em",
          fontFamily: "'Rubik', sans-serif",
          marginBottom: "0.4em",
        }}
      >
        2
      </div>
    </div>
  );
}
