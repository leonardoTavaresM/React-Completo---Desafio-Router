import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Produto.module.css";

const Produto = () => {
  const [produto, setProduto] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoad(true);
        const response = await fetch(url);
        const json = await response.json();

        setProduto(json);
      } catch (erro) {
        setError("um erro aconteceu");
      } finally {
        setLoad(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  console.log(produto);
  if (load) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <section className={styles.produto + " animeLeft"}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Ranek | Esse é um produto: ${produto.nome}`}
      />
      <div>
        {" "}
        {produto.fotos.map((foto) => (
          <img src={foto.src} alt={foto.titulo} key={foto.src} />
        ))}
      </div>

      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
