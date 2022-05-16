import React, {useState} from "react"

 const Size = () => {

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

    <button onClick={idk}>+</button>
    <button onClick={sub}>-</button>

    </div>
  )
}

export default Size