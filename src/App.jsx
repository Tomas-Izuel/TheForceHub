import { BrowserRouter, Route, Routes } from "react-router-dom";
//Context
import { CharacterProvider } from "./context/CharacterContext";
//Components
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CharacterListContainer from "./components/containers/CharacterListContainer/CharacterListContainer";
import MySearchListContainer from "./components/containers/MySearchListContainer/MySearchListContainer";

import "./App.css";

function App() {
  return (
    <CharacterProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:cid" element={<CharacterListContainer />} />
          <Route path="/character" element={<CharacterListContainer />} />
          <Route path="/mysearchs" element={<MySearchListContainer />} />
        </Routes>
      </BrowserRouter>
    </CharacterProvider>
  );
}

export default App;

{
  /* <CharacterProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:nameCharacter" />
          <Route path="/results" element={<ResultsList />} />
          <Route path="/searchs" element={<SearchList />} />
        </Routes>
      </BrowserRouter>
    </CharacterProvider> */
}
