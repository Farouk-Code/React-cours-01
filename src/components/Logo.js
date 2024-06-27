import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* les balises img sont importées depuis le dossier "public", donc le chemin est ./NOM_DE_L_IMAGE */}
      <img src="./logo192.png" alt="Logo react" />
      <h3>React world</h3>
    </div>
  );
};

export default Logo;
