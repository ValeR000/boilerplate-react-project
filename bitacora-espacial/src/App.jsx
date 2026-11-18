import React from 'react'

const App = () => {
  return (
    <>
      <header className="contenedor cabecera">
        <a href="" className="marca">Bitácora Espacial</a>
        <nav>
          <a href="#noticias">Noticias</a>
          <a href="https://www.nasa.gov/blogs/" target="_blank">Blogs de NASA</a>
          <a href="#acerca">Acerca</a>
        </nav>
      </header>

      <main className="contenedor" id="contenedor">
        <h1>Explora las noticias del espacio</h1>
        <p className="introduccion">Misiones, descubrimientos y próximos destinos</p>

        <section id="noticias" aria-labelledby="titulo-noticias">
          <h2 id="titulo-noticias">Últimas noticias</h2>
          <div className="grid-noticias"></div>
        </section>
      </main>

      <footer className="contenedor" id="acerca">
        <p>Datos de Spaceflight News API</p>
      </footer>
    </>
  )
}

export default App