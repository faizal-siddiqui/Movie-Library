import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Flex } from "./components/StyledComponents/styles";
import Sidebar from "./components/Sidebar/Sidebar";
import Movies from "./components/Movies/Movies";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navbar />
      <Flex>
        <Sidebar />
        <Movies />
      </Flex>
      <ToastContainer />
    </div>
  );
}

export default App;
