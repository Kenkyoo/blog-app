import { useEffect, useState } from "react";
import Article from "./Article";
import Section from "./Section";
import Hero from "./Hero";
import Pagination from "./Pagination";
import Loader from "./Loader";
import axios from 'axios';

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const perPage = 10;

useEffect(() => {
  axios.get(`https://server-blog-kg8b.onrender.com/api/posts/${page}/${perPage}`)
    .then((res) => {
      console.log("Respuesta del backend:", res.data); // Verifica los datos recibidos
      setPosts(res.data);
      setTotalPages(res.data.pages)
      setIsLoading(false);
    })
    .catch((err) => {
      console.error('Error al obtener los posts:', err);
    });
}, [page, perPage]);
 

  if (isLoading) {
    return (
      <Loader />
    );
  }
  return (
  <>
    <Hero />  
    <Section title="Blog">
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
    </Section>  
      <Pagination setPage={setPage} totalPages={totalPages} page={page} />
</>    
  );
}