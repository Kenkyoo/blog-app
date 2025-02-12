import backgroundImage from '../assets/Hero.jpg'
import * as motion from "motion/react-client"

export default function Hero() {
  return (

  <motion.div 
    className="hero bg-base-200 min-h-screen"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    }}
  >
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={backgroundImage}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Explora. Aprende. Comparte.</h1>
      <p className="py-6">
      Sumérgete en un mundo de ideas, historias y conocimientos. Nuestro blog es el espacio donde las palabras cobran vida y la comunidad se une para compartir su pasión.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</motion.div>
  )
}
