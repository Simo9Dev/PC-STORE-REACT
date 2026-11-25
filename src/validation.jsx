import { useState } from "react"

export default function Valider(){
const[adress,setAdress] = useState("")
const[nom,setNom] = useState("")

  const [panier, setPanier] = useState(() => {
    try {
      const cart = localStorage.getItem("carts");
      return cart ? JSON.parse(cart) : [];
    } catch {
      return [];
    }
  });

const phone = "212615186041";
const prix_total = panier.reduce((sum, t) => sum + Number(t.prix), 0);

  function handleValider() {




  const lines = panier.map(
  (m, i) => `${i + 1}. ${m.Designation} - ${m.prix} MAD`
);
const text =     
      `Nom: ${nom}\n` +
      `Adresse: ${adress}\n\n` +
      `Nouvelle commande:\n${lines.join("\n")}\n\n` +
      `Total: ${prix_total} MAD`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }


return(
<>
<div className="validerf" >
<label htmlFor="Nom">Enter Nom:  </label><input type="text" id="adr" value={nom}  onChange={(e)=> setNom(e.target.value)}/> <br />

<label htmlFor="adr">Enter L'Adress:  </label><input type="text" id="adr" value={adress}  onChange={(e)=> setAdress(e.target.value)}/> <br />

<button onClick={handleValider}>Valider la command</button>
</div>
</>
    )
}