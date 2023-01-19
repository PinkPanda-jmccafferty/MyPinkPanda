// Imports
import hero from '../../assets/Hero_Index.png'
import hearts from '../../assets/pixel_hearts.jpeg'
import bananaman from '../../assets/banana_man.png'
// Styles
import './Hero.css'

export default function Hero() {
  return (
    <>
      <div>
        <h1><span className='pink'>Pink</span>Panda</h1>
        <p>Strangely Unique finds for everyones collection!</p>
        <img src={hero}></img>
      </div>
      <div className='btn_div'>
        <img src={hearts}></img>
        <img src={bananaman}></img>
        <button>SHOP NOW</button>
      </div>
    </>
  )
}
