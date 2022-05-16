import React, {useState} from 'react'

export const Work = () => {
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
    <h1>How technology affected employees personal life -</h1>
    <br></br><br></br>
    <p>Workload varies company to company, each company has their own way of operating. In the industry there is a thing called “ on call ”. This means that employers could call the employee anytime if they find a bug in the product. The employee would have to fix the bug because of this when employees are on-call they have to make sure they have access to wifi and a laptop. Technology has made this possible as previously this was not possible. Getting in touch with others was harder. You could not instantly message someone. </p>
    <button onClick={idk}>+</button>
    <button onClick={sub}>-</button>

    </div>
  )
}
