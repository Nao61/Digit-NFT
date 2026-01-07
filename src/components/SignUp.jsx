import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Frame from "../assets/icons/Frame.svg";

function SignUp() {
  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Veuillez remplir cet champ";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.password) {
      newErrors.password = "Veuillez remplir cet champ";
    } else if (formData.password.length < 6) {
      newErrors.password = "Mot de passe trop court (min 6 caractères)";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Veuillez remplir cet champ";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Mot de passe Incorrect";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Formulaire valide :", formData);
      alert("Inscription réussie !");
      setFormData({
        surname: "",
        firstName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-20">
      <div className="max-w-md w-full bg-white px-8 py-6 rounded-lg shadow-md">
        <Link
          to="/"
          className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
        >
          <img src={Frame} alt="Logo" />
        </Link>

        <h2 className="text-2xl font-bold mb-4">Créer un compte</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
          <Input
            label="Nom"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Entrez votre nom"
          />
          <Input
            label="Prénom"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Entrez votre prénom"
          />
          <Input
            label="Téléphone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Entrez votre numéro"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
            error={errors.email}
          />
          <Input
            label="Mot de passe"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Entrez votre mot de passe"
            error={errors.password}
          />
          <Input
            label="Confirmer le mot de passe"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmez votre mot de passe"
            error={errors.confirmPassword}
          />

          <button
            type="submit"
            className="mt-3 bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            S'inscrire
          </button>
        </form>

        <p className="mt-3 text-center text-sm text-gray-600">
          Vous avez déjà un compte ?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
