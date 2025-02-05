import { Outlet } from "react-router";
import Header from "./src/components/Header/Header";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("");

  const handleClick = () => {
    setMode((prev) => (prev === "dark" ? "" : "dark"));
  };
  return (
    <>
      <Header mode={mode} handleClick={handleClick} />
      <Outlet context={mode} />
    </>
  );
}

export default App;
