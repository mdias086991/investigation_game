import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameLayout from "./components/GameLayout";
import CaseSelection from "./components/CaseSelection";
import CaseDetail from "./components/CaseDetail";
import Investigation from "./components/Investigation";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GameLayout />}>
            <Route index element={<CaseSelection />} />
            <Route path="/case/:caseId" element={<CaseDetail />} />
            <Route path="/investigation/:caseId" element={<Investigation />} />
            <Route path="/results/:caseId" element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;