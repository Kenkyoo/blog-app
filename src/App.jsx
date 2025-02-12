import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./auth/profile";
import LogoutButton from "./auth/logout";
import Posts from "./components/ShowPosts"
import Post from "./components/GetPost";
import NewPost from "./components/NewPost";
import User from "./components/getUser";
import FavoritePosts from "./components/Favorites";
import UserPosts from "./components/UserPosts";
import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import { Routes, Route } from "react-router-dom"
import { Navigate } from "react-router-dom";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  

  if (isLoading) {
    return <Loader />;
  }

  return (
    isAuthenticated ? (
      <div className="h-screen w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/logout" element={<LogoutButton />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/logout" element={<LogoutButton />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="profile/favorites" element={<FavoritePosts />} />
          <Route path="/users/:user_id" element={<User />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="myPosts" element={<UserPosts />} />
          <Route path="myFavorites" element={<FavoritePosts />} />
        </Route>
        </Routes>
        <Footer />
      </div>
    ) : (
      <Homepage />
    )
  );
};

export default App;