import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    emailjs
      .send(
        'service_b4eyw1j',
        'template_qr84w46',
        { from_email: email, message: question },
        { publicKey: 'jv0S9pQ7b0uSfoA4e' }
      )
      .then(() => {
        setStatus("Message envoyé ✅");
        setEmail("");
        setQuestion("");
      })
      .catch((error) => {
  console.error("EmailJS error:", error);
  setStatus("Erreur : " + (error?.text || error?.message || "inconnue"));
});
  };

  return (
    <><div className='allcontact'>
    <form className="contact" onSubmit={handleSubmit}>
      <label htmlFor="email">Email :</label>
      <input
        id="email"
        type="email"
        placeholder="entrer l'email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br /><br />

      <label htmlFor="question">Question :</label>
      <textarea
        id="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <br /><br />

      <button type="submit">Submit</button>
      <p>{status}</p>
    </form>
    <div className='contact_img'>
      <img src="adress-removebg-preview.png" alt="" />
      <p id='one'><strong>N° 12, Rue 104, Hay Al Farah</strong></p> 
      <br />
    <img src="telepone-removebg-preview.png" alt="tele" /><p id='tow'><strong>+212 700452732</strong></p> 
    </div>
    </div>
  </>
  );
}