import React, { useState } from 'react';
import '../styles/Profile.css';

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
<div className="profile-container">
<h2>Perfil do Usuário</h2>
<form className="profile-form">
{userData.photo ? (
<img src={userData.photo} alt="Foto de Perfil" className="profile-photo" />
) : (
<div className="profile-photo-placeholder">Foto de Perfil</div>
)}
{isEditing ? (
<>
<input type="file" onChange={handleFileChange} className="file-input" />
<input type="text" name="name" value={userData.name} onChange={handleChange} className="text-input" placeholder="Nome" />
<input type="email" name="email" value={userData.email} onChange={handleChange} className="text-input" placeholder="Email" />
<input type="text" name="address" value={userData.address} onChange={handleChange} className="text-input" placeholder="Endereço" />
<input type="text" name="preferences" value={userData.preferences} onChange={handleChange} className="text-input" placeholder="Preferências" />
<button type="button" onClick={handleSaveProfile} className="save-button">Salvar Perfil</button>
</>
) : (
<>
<input type="text" value={userData.name} disabled className="text-input" />
<input type="email" value={userData.email} disabled className="text-input" />
<input type="text" value={userData.address} disabled className="text-input" />
<input type="text" value={userData.preferences} disabled className="text-input" />
<button type="button" onClick={handleEditProfile} className="edit-button">Editar Perfil</button>
</>
)}
</form>
</div>
);
};

export default Profile;