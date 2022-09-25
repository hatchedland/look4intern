import './app.sass';
import Navbar from './Components/Navbar/Navbar';
import RouteSwitch from './RouteSwitch'
import { AuthProvider } from './Contexts/Auth'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <RouteSwitch />
      </AuthProvider>
    </div>
  );
}

export default App;
