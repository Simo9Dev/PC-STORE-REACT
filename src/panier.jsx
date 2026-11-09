import { useState } from "react";

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
    const updatedpanier = panier.filter((item, index) => {
      return index !== indexToDelete;
    }
)
setPanier(updatedpanier);
localStorage.setItem("carts",JSON.stringify(updatedpanier))
};
let prix_total = 0;
panier.map((t)=>{
prix_total += Number(t.prix)
})
  return (
    <>  <div className="panier_content">
      <table>
      {panier.map((m, n) => (
       < tr ><div className="sell_product" key={n}>
        
         <td><img src={m.img} alt="" /> </td><td><p>{m.Designation} || {m.prix} MAD  </p>  </td>  
               <td> <button onClick={() => deleteItem(n)}>Supprimer</button></td>
        </div>
</tr>
      
        
      ))}
      </table>
      <footer>
      <h4>Le prix total de panier: {prix_total} MAD</h4><br />
      <button className="valider">Valider La Command</button>
      </footer></div>
    </>
  );
}