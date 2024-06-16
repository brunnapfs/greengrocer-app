import React, { useState } from 'react';
import '../styles/Form.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Green Street, Cityville',
    preferences: 'Orgânicos, Frutas, Vegetais',
    photo: null
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFileChange = (e) => {
    setUserData({ ...userData, photo: URL.createObjectURL(e.target.files[0]) });
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    alert('Perfil atualizado com sucesso');
  };

  return (
    <div className="form-container">
      <h2>Perfil do Usuário</h2>
      <form>
        {userData.photo ? (
          <img src={userData.photo} alt="Foto de Perfil" className="profile-photo" />
        ) : (
          <div className="profile-photo-placeholder">Foto de Perfil</div>
        )}
        {isEditing ? (
          <>
            <input type="file" onChange={handleFileChange} />
            <input type="text" name="name" value={userData.name} onChange={handleChange} />
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
            <input type="text" name="address" value={userData.address} onChange={handleChange} />
            <input type="text" name="preferences" value={userData.preferences} onChange={handleChange} />
            <button type="button" onClick={handleSaveProfile}>Salvar Perfil</button>
          </>
        ) : (
          <>
            <input type="text" value={userData.name} disabled />
            <input type="email" value={userData.email} disabled />
            <input type="text" value={userData.address} disabled />
            <input type="text" value={userData.preferences} disabled />
            <button type="button" onClick={handleEditProfile}>Editar Perfil</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Profile;
