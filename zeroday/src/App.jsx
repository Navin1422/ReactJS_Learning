import React from 'react';
import { Routes, Route } from "react-router-dom";
import FetchApiComponent from "./fetch-api/fetch-api-component";
import UseEffectComponent from './use-effect-practice/use-effect-component.jsx';
import UseEffectPracticeTwo from "./use-effect-practice/use-effect-practice-2";
import UseEffectFetchApi from "./use-effect-practice/use-effect-fetch-api.jsx";
import SignupFormComponent from './signup-form-api/signup-form-component.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/api-fetch" element={<FetchApiComponent />} />
        <Route path = "/use-effect-practice" element={<UseEffectComponent />} />
        <Route
          path="/use-effect-practice-2"
          element={<UseEffectPracticeTwo />}
        />
        <Route
          path="/use-effect-fetch-api"
          element={<UseEffectFetchApi />}
        />
        <Route path="/signup-form" element={<SignupFormComponent />} />
      </Routes>
    </div>
  );
}

export default App;
