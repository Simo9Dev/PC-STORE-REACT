import { Routes,Route,NavLink} from 'react-router-dom'
import Acceuil from './Acceuil'
import Product from './product'
import Contact from './contact'
import Panier from './panier'

export default function App(){
    return(
    <>
<nav className='navcontent'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXA1WfH0M8y4HpLfL6w3pnP74KsPkNcd-wp0bGF1Tc5g&s=10" alt="pc" width="100" height="50" />

    <NavLink to="/" >Aceuil </NavLink>
    <NavLink to="/product" >Product </NavLink>
    <NavLink to="/contact" >contact </NavLink>
        <NavLink to="/panier" >Panier </NavLink>
</nav>

<Routes>
<Route path="/" element={<Acceuil />} />
<Route path="/product" element={<Product />}/>
<Route path="/contact" element={<Contact />}/>
<Route path="/panier" element={<Panier />}/>

</Routes>
</>
)
}