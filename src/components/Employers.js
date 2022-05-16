import React, {useState} from 'react'

export const Employers = () => {
    const [fontsize, setfontsize] = useState(20)

  const idk = () => {
    setfontsize(fontsize + 5)
  }
  const sub = () => {
    setfontsize(fontsize - 5)
  }
  return (
    <div id="idk" style={{
        fontSize: `${fontsize}px`
      }}> 

      <h1> Employers for software engineering in Ontario </h1>
      <br></br><br></br>
      <ul>
      
        <li>Google</li>
        <li>Uber</li> 
        <li>Amazon</li>
        <li>Facebook/Meta</li>
        <li>Microsoft</li> 
        <li>Wish</li>
        <li>Intel</li>  
      
      </ul>

    <button onClick={idk}>+</button>
    <button onClick={sub}>-</button>

        </div>
  )
}
