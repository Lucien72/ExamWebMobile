import './App.css'

function App() {
  const install = () => {
  }

  return (
    <div className="App">
      <p>
        Plus besoins de revenir sur ce site en utilisant ton navigateur nous avons maintenant notre propre application,
      </p>
      <p>
        Nous avons ajoutés de nouvelles fonctionnalités donc télécharge l'application pour pouvoir en profiter,
      </p>
      <p>
        Tout les appareils sont compatibles.
      </p>
      <button onClick={() => install()}>Téléchargement</button>
    </div>
  )
}

export default App
