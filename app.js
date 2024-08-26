function App() {
  const style1 = { color: "deeppink" };
  const year = new Date().getFullYear();
  return (
    <div>
      <h1 style={style1}>Miss Konkamon Fungsuk</h1>
      <p style={{ fontSize: "24px" }}>Age : {year - 1994}</p>
      <p style={{ fontSize: "24px" }}>Challenge : {} </p>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
