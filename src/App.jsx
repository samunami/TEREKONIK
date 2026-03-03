import { useState } from 'react'
import './styles.css'
import { genres } from './config/genres'

function App() {
  const [activeGenre, setActiveGenre] = useState(genres[0])

  return (
    <div className="app-container">
      <div className="player-panel">
        {/* Логотип */}
        <h1 className="logo">TEREKONIK</h1>
        <p className="logo-subtitle">MOUNTAIN RADIO</p>

        {/* Обложка */}
        <div className="track-art">🏔️</div>

        {/* Информация о треке */}
        <div className="track-info">
          <p className="track-title">Выберите жанр</p>
          <p className="track-artist">TEREKONIK Radio</p>
        </div>

        {/* Кнопки управления */}
        <div className="controls">
          <button className="btn-control">⏮</button>
          <button className="btn-control btn-play">▶</button>
          <button className="btn-control">⏭</button>
        </div>

        {/* Жанры - генерируются из конфига */}
        <div className="genres-bar">
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={`btn-genre ${activeGenre.id === genre.id ? 'active' : ''}`}
              onClick={() => setActiveGenre(genre)}
              style={{
                '--accent-color': genre.color
              }}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App