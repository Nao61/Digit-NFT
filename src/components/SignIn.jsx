import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Frame from "../assets/icons/Frame.svg";
import { signInSchema } from "../components/validations.js";


function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const validate = () => {
  //   const newErrors = {};

  //   if (!formData.email) {
  //     newErrors.email = "Veuillez remplir cet champ";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = "Email invalide";
  //   }

  //   if (!formData.password) {
  //     newErrors.password = "Veuillez remplir cet champ";
  //   } else if (formData.password.length < 6) {
  //     newErrors.password = "Mot de passe Incorrect";
  //   }

  //   return newErrors;
  // };

  const handleSubmit = (e) => {
  e.preventDefault();

  try {
    signInSchema.parse(formData);

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setErrors({ email: "Aucun compte trouvé. Veuillez vous inscrire." });
      return;
    }

    if (storedUser.email !== formData.email) {
      setErrors({ email: "Email incorrect" });
      return;
    }

    if (storedUser.password !== formData.password) {
      setErrors({ password: "Mot de passe incorrect" });
      return;
    }

    alert("Connexion réussie !");
    console.log("Utilisateur connecté :", storedUser);
    navigate("/")

    setErrors({});
  } catch (error) {
    if (error.issues) {
      const formattedErrors = {};

      error.issues.forEach((err) => {
        const fieldName = err.path[0];
        formattedErrors[fieldName] = err.message;
      });

      setErrors(formattedErrors);
    }
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <Link
          to="/"
          className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
        >
          <img src={Frame} alt="Logo" />
        </Link>

        <h2 className="text-2xl font-bold mb-6 mt-4">Créer un compte</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <button
            type="submit"
            className="mt-4 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Se connecter
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Pas encore de compte ?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
