import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/"><Landing /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
      </Switch>
    </>
  );
}

export default App;
