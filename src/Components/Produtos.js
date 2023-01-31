import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import styles from "./Produtos.module.css";

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);
  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title={`Ranek`} description={`Descricao do site Ranek`} />
      {produtos.map((produto) => (
        <Link key={produto.id} to={`produto/${produto.id}`}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].title} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
