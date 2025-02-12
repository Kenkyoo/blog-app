import { useAuth0 } from "@auth0/auth0-react";
import { IsVerify, IsNotVerify } from "../components/Verify";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Link, Outlet } from "react-router-dom";
import Loader from "../components/Loader";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const formatDate = (isoString) => {
    return format(new Date(isoString), "dd 'de' MMMM 'de' yyyy, HH:mm", { locale: es });
  };

  if (isLoading) {
    return <Loader />;
  }
  console.log(user);
  return (
    isAuthenticated && (
      <div>
        <div role="tablist" className="tabs shadow-lg mt-4">
          <div className="tooltip" data-tip="Aqui puedes ver tus posts creados y tus favoritos">
            <a role="tab" className="tab tab-active">
              <Link to="/profile/myPosts">My Posts</Link>
            </a>
  
            <a role="tab" className="tab">
              <Link to="/profile/myFavorites">My Favorites</Link>
            </a>
          </div>    
        </div>
        <div className="divider divider-secondary my-2"></div>
        <Outlet />
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={user.picture}
              className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-primary">{user.name}</h1>
              <p className="py-6">
                {user.email}
              </p>
              <p className="py-6">
                {user.email_verified ? <IsVerify /> : <IsNotVerify />}
              </p>
              <p className="py-6">
                {user.updated_at ? `Last updated: ${formatDate(user.updated_at)}` : ''}
              </p>
            </div>
          </div>
        </div>
      </div>

    )
  );
};

export default Profile;