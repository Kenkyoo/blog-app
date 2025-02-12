import PropTypes from "prop-types";
import { useLocalStorage } from "./useLocalStorage";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

const LikeBtn = ({ id }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  
  function handleLike() {
    const isFavorite = favorites.includes(id);
    const updatedFavorites = isFavorite
      ? favorites.filter((favId) => favId !== id) // Quitar de favoritos
      : [...favorites, id]; // Agregar a favoritos

    axios.patch(`https://server-blog-kg8b.onrender.com/api/favorites/${id}`, {
        favorite: !isFavorite // Nuevo valor a actualizar
      })
      .then(() => {
        setFavorites(updatedFavorites);
        toast(
          isFavorite
            ? "El post ha sido eliminado de Favoritos"
            : "El post ha sido añadido correctamente a Favoritos"
        );
      })
      .catch((error) => console.error("Error al actualizar los favoritos:", error))};
    

  return (
    <>
      <div className="tooltip" data-tip="Add to favorites">
      <button onClick={handleLike} className="btn btn-secondary float-right">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
  Add
</button>
      </div>
      <ToastContainer />
    </>
  );
};

LikeBtn.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LikeBtn;