import "./NoticiaCard.css";

export const NoticiaCard = ({
  titulo,
  resumen,
  imagen,
  fuente,
  fecha,
  enlace,
}) => {
  const fechaFormateada = new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
  }).format(new Date(fecha));
  return (
    <article className="noticia-card">
      <img src={imagen} alt="" className="noticia-card__imagen" />
      <h3 className="noticia-card__titulo">{titulo}</h3>
      <p className="noticia-card__resumen">{resumen}</p>
      <p className="noticia-card__meta">
        {fuente} <time datetime={fecha}>{fechaFormateada}</time>
      </p>
      <a className="noticia-card__enlace" target="_blank" href={enlace}>
        Leer noticia
      </a>
    </article>
  );
};