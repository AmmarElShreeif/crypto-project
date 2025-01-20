import "./profile.css";

const Profile = ({ onClick, photo }) => {
  return (
    <div className="dropdown">
      <img src={photo} alt="Your Photo" />
      <div className="dropdown-content">
        <button onClick={onClick} className="sign-out">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
