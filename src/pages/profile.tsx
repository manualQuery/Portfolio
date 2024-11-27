// src/pages/profile.tsx
import { useState } from "react";
import ProfileForm from "../components/ProfileForm";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Create Profile</button>
      {showModal && <ProfileForm onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Profile;
