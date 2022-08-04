import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './navbarComponent';
import CarouselComponent from './carouselComponent';
import HomeComponent from './home';
import FooterComponent from './footerComponent';

function App() {
     
  return (
    
    <div className="App">
      <header>
        <NavbarComponent />
      </header>
      <CarouselComponent />
      <HomeComponent />
      <FooterComponent />
      
   </div>
  );
}

export default App;
