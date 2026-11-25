import { useState } from "react";
import Valider from './validation'
import { Routes,Route,Link} from 'react-router-dom'


export default function Panier() {
  const [panier, setPanier] = useState(() => {
    try {
      const cart = localStorage.getItem("carts");
      return cart ? JSON.parse(cart) : [];
    } catch {
      return [];
    }
  });



  function deleteItem(indexToDelete) {
    const updatedPanier = panier.filter((_, index) => index !== indexToDelete);
    setPanier(updatedPanier);
    localStorage.setItem("carts", JSON.stringify(updatedPanier));
  }

  const prix_total = panier.reduce((sum, t) => sum + Number(t.prix), 0);



  return (
    <div className="panier_content">
      <table>
  <tbody>
    {panier.map((m, n) => (
    <tr key={n} className="sell_product">
  <td><img src={m.img} alt="" /></td>
  <td><p>{m.Designation} || {m.prix} MAD</p></td>
    <td><button onClick={() => deleteItem(n)}>Supprimer</button></td>
  </tr>
    ))}
  </tbody>
</table>

<footer>
    <h4>Le prix total de panier: {prix_total} MAD</h4>
 
  <Link to="/validation" >Panier </Link>
  <Routes>
    <Route path="/validation" element={<Valider />} />
  </Routes>
 
  </footer>
</div>
  );
}