import { useState } from "react";
// import WelcomeScreen from "./components/screens/WelcomeScreen";
import OverviewScreen from "./components/screens/OverviewScreen";
import ArticlesScreen from "./components/screens/ArticlesScreen";

function App() {
  return (
    <div id="app-container">
      {/* <WelcomeScreen /> */}
      {/* <OverviewScreen /> */}
      <ArticlesScreen />
    </div>
  );
}

export default App;
