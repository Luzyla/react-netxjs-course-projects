import {Route, Switch} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/new-meetup/'>
          <NewMeetupPage />
        </Route>
        <Route exact path='/favorites/'>
          <FavoritesPage />
        </Route>
        <Route exact path='/'>
          <AllMeetupsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
