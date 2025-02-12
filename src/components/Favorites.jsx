import { useLocalStorage } from "./useLocalStorage";
import { useEffect, useState } from "react";
import Article from "./Article";
import Section from "./Section";
import axios from 'axios';

const FavoritePosts = () => {
  const [favorites] = useLocalStorage("favorites", []);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (favorites.length === 0) {
      setPosts([]); // Limpiar la lista si no hay favoritos
      return;
    }
      axios.get(`https://server-blog-kg8b.onrender.com/api/posts`)
      .then((response) => {
        console.log(response);
        const filteredPosts = response.data.filter((post) => favorites.includes(post.id.toString()));
        setPosts(filteredPosts);
      })
      .catch((err) => {
        console.error('Error al obtener los posts:', err);
      });
  }, [favorites]);

  return (
    <>
      <Section title="Favorites">
        {posts.length === 0 ? (
          <p>No tienes posts favoritos.</p>
        ) : (
          <>
            {posts.map((post) => (
        <Article
          key={post.id}
          id={post.id}
          title={post.title}
          subtitle={post.subtitle}
          category={post.category}
          update={post.created_at}
          userName={post.user.username}
          userPic={post.user.profile_pic}
          image={post.featured_image}
        />
            ))}
          </>
        )}
      </Section>
    </>    
  );
};

export default FavoritePosts;
