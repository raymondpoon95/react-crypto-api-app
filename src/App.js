import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import CoinInfo from "./CoinInfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/coinInfo/:id" component={CoinInfo} />
      </Switch>
    </Router>
  );
}

export default App;
