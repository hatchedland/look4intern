import './app.sass';
import Navbar from './Components/Navbar/Navbar';
import RouteSwitch from './RouteSwitch'
import { AuthProvider } from './Contexts/Auth'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <RouteSwitch />
        {/* <Footer /> */}
      </AuthProvider>
    </div>
  );
}

export default App;
