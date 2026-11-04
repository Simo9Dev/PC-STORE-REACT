import React, { useState, useEffect } from 'react';

export default function Product() {
  const [cherche, setCherche] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/producte.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erreur de chargement des données :", error));
  }, []);

  const filtered = products.filter((p) =>
    p.Designation.toLowerCase().includes(cherche.toLowerCase())
  );

  return (
    <><div className='cherche'>
       <label htmlFor="cherche">Cherche :</label>
      <input
        id="cherche"
        type="text"
        placeholder="Cherche par nom de pc"
        value={cherche}
        onChange={(e) => setCherche(e.target.value)}
      />
      </div>
    <div className='allproduct'>
   

      {filtered.map((p) => (
        <div className='product-card' key={p.id}>
          {p.Designation} <br />
          <img src={p.img} alt={p.Designation} /> <br />
          {p.prix} MAD
          
        </div>
      ))}
    </div>
    </>
  );
}