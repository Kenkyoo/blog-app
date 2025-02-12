import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import Loader from "./Loader";
import axios from 'axios';

const User = () => {
  const { user_id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://server-blog-kg8b.onrender.com/api/user", {
      params: { user_id }
    })
    .then((res) => {
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, [user_id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ProfilePage
      firstName={user[0].user.first_name}
      lastName={user[0].user.last_name}
      userName={user[0].user.username}
      email={user[0].user.email}
      role={user[0].user.role}
      picture={user[0].user.profile_pic}
      updated={user[0].user.updated_at}
    />
  );
};

export default User;
