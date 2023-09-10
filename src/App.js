import { Fragment } from "react";
import Dashboard from "./pages/dashboard/dashboard.component";
import { GlobalStyle } from "./global.styles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Dashboard />
    </Fragment>
  );
};

export default App;
