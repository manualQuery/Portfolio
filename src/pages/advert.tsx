// src/pages/advert.tsx
const Advert = () => {
  // Fetch user profile data from the server
  const userProfile = {
    photo: "/path/to/photo.jpg",
    name: "John Doe",
    sex: "Male",
    religion: "Christian",
    occupation: "Software Developer",
    description: "This is a sample description.",
  };

  return (
    <div>
      <img src={userProfile.photo} alt="User Photo" />
      <p>Name: {userProfile.name}</p>
      <p>Sex: {userProfile.sex}</p>
      <p>Religion: {userProfile.religion}</p>
      <p>Occupation: {userProfile.occupation}</p>
      <button onClick={() => alert(userProfile.description)}>
        View Composition
      </button>
    </div>
  );
};

export default Advert;
