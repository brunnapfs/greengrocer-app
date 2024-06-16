import React, { useState } from 'react';
import '../styles/Form.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Green Street, Cityville',
    preferences: 'Orgânicos, Frutas, Vegetais'
  });

  const handleEditProfile = () => {
    // Implemente a lógica para editar o perfil do usuário
    // Exemplo simples: mudar o nome para 'Jane Doe'
    const updatedUserData = { ...userData, name: 'Jane Doe' };
    setUserData(updatedUserData);
    alert('Perfil atualizado com sucesso');
  };

  return (
    <div className="form-container">
      <h2>Perfil do Usuário</h2>
      <form>
        <input type="text" value={userData.name} disabled />
        <input type="email" value={userData.email} disabled />
        <input type="text" value={userData.address} disabled />
        <input type="text" value={userData.preferences} disabled />
        <button type="button" onClick={handleEditProfile}>Editar Perfil</button>
      </form>
    </div>
  );
};

export default Profile;
