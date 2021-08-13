import { GlobalStyle } from '../src/globalstyle/global'
import { Home } from './pages/Home/Home';
import { NewRoom } from './pages/NewRoom/NewRoom';
import { BrowserRouter, Route } from 'react-router-dom'


import { AuthContextProvider } from '../src/contexts/AuthContext'


function App() {

  
  return (
    <BrowserRouter>

      <AuthContextProvider>

        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
