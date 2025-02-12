import { useState, useEffect, useContext } from "react";
import { DataContext } from "../UserContext";
import Article from "./Article";
import axios from 'axios';
import Section from "./Section";

const UserPosts = () => {
    const userData = useContext(DataContext);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const user_id = userData.id;
      axios.get("https://server-blog-kg8b.onrender.com/api/userPosts", {
        params: { user_id }
      })
      .then((res) => {
          setPosts(res.data);
        })
        .catch((error) => console.error("Error:", error));
    }, [userData.id]);
  
  return (
    <>
      <Section title="Mis Posts">
      {posts.length === 0 ? (
      <p>No tienes posts creados.</p>
      ) : (
      <>
        {posts.map((post) => (
          <Article
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.main_content}
            tags={post.category}
          />
        ))}
    </>
    )}
    </Section>
  </>  
  );
};

export default UserPosts;
