// Imports
import rick from '../../assets/Spotlight_rickandmorty.png'
import dbz from '../../assets/Spotlight_DBZ.png'
import videogames from '../../assets/Spotlight_videogames.png'


// Styles
import './Spotlight.css'

export default function Spotlight() {
  return (
    <>
      <h2 >Spotlight</h2>
      <div className="spotlights">
          <img src={rick} alt="" />
          <img src={dbz} alt="" />
          <img src={videogames} alt="" />
      </div>
    </>
  )
}
