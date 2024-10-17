import React from "react";
import { Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Page1() {
  return (
    <Typography variant="h6">
      This is React template for MUI and TypeScript.
    </Typography>
  );
}
function Page2() {
  return <Typography variant="h6">This is page 2.</Typography>;
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
