import LoginButton from "./auth/login";
import backgroundImage from './assets/Homepage.jpg';

const Homepage = () => {
    return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${backgroundImage})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bienvenido a Nuestro Blog</h1>
      <p className="mb-5">
      Descubre historias, aprende algo nuevo cada día y únete a una comunidad apasionada por compartir ideas.  
      Inicia sesión para comenzar a explorar y aportar tus propias publicaciones.
      </p>
      <LoginButton />
    </div>
  </div>
</div>
)
}

export default Homepage;