import PropTypes from 'prop-types';

const ProfilePage = ({firstName, lastName, userName, email, role, picture, updated}) => {
    return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={picture}
          className="max-w-sm rounded-lg shadow-2xl animate__animated animate__backInDown" />
        <div>
          <h1 className="text-5xl font-bold text-primary">{firstName} {lastName}</h1>
          <p className="py-6 text-secondary">
            {role}
          </p>  
          <p className="py-6">
            {userName}
          </p>
          <p className="py-6">
            {email}
          </p>  
          <p className="bg-accent text-primary-content">Last update: {updated}</p>
        </div>
      </div>
    </div>)
}

export default ProfilePage;

ProfilePage.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
};