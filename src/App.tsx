import { GlobalStyle } from '../src/globalstyle/global'
import { Home } from './pages/Home/Home';
import { NewRoom } from './pages/NewRoom/NewRoom';
import { Room } from './pages/Room/Room';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import { AuthContextProvider } from '../src/contexts/AuthContext'
import { AdminRoom } from './pages/AdminRoom/AdminRoom';


function App() {


  return (
    <BrowserRouter>

      <AuthContextProvider>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>

      </AuthContextProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
