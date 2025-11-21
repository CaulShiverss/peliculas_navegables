import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Volver a la página anterior"
      className="
        inline-flex items-center gap-2
        px-4 py-2
        text-sm font-medium
        text-gray-800
        bg-white 
        border border-gray-300
        rounded-xl
        shadow-sm
        hover:bg-gray-100 
        focus:outline-none
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition
      "
    >
      {/* Flecha accesible y decorativa */}
      <span aria-hidden="true">←</span>
      Volver
    </button>
  );
}

export default BackButton;
