import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "./BlogPost";
import Loader from "./Loader";
import axios from 'axios';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://server-blog-kg8b.onrender.com/api/post", {
      params: { id }
    })
    .then((res) => {
      console.log(res);
      
      setPost(res.data[0]);
      setIsLoading(false);
    })
    .catch((err) => {
      console.error("Error al obtener los posts:", err);
    });
  }, [id]);
  

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <BlogPost
        id={post.id}
        title={post.title}
        body={post.main_content}
        image={post.featured_image}
        updated={post.updated_at}
        created={post.created_at}
        username={post.user.username}
        role={post.user.role}
        profilepic={post.user.profile_pic}
        subtitle={post.subtitle}
        user_id={post.user_id}
      />
    </div>
  );
};

export default Post;
