import { useState } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Main from "../Main/Main";

function Home() {
  const [search, setSearch] = useState("");
  return (
    <>
    
      <HeaderMenu search={search} setSearch={setSearch} />
      <Main search={search} />
    </>
  );
}

export default Home;
