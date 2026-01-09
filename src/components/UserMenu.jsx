import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, LogOut } from "lucide-react";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    setIsOpen(false);
    navigate("/");
    window.location.reload();
  };

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
      >
        <User size={20} className="text-gray-700" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <User size={16} className="text-gray-500" />
                <p className="text-sm font-semibold text-gray-900">
                  {user.firstName} {user.surname}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                <p className="text-xs text-gray-600">{user.email}</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition flex items-center gap-2"
            >
              <LogOut size={16} />
              Se déconnecter
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UserMenu;