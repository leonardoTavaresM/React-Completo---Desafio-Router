import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato-web.webp";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Imagem de contato" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>teste@gmail.com</li>
          <li>(99) 99999-9999</li>
          <li>Rua Ali mesmo, 123123</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
