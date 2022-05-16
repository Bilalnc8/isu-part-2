import React, {useState} from 'react'
import Size from "./Size";

export const Google = () => {
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
    <h2>Salary</h2>
    <p>The salary of a software engineer at Google is approximately 190k per year</p>
    <br></br><br></br>

    <h2>How they use computers -</h2><br></br>
    <p>At Google computers are used to code websites, servers, mobile applications and browsers. Computers are also used in marketing. They use computers to make ads such as videos.</p>
<br></br>
    <h2>Effects on human health and environment caused by using computers at Google - </h2>
<br></br>
    <p>The company has helped in digitizing information by making a web browser. The browser makes information online and makes finding information easy. This basically decreases the need for physical books. Books require paper which come from trees and trees release oxygen that 
    <br></br><br></br>
    A Lot of computers are used by Google employees. In total all around the world Google has hired 27,169 software engineers. Every single engineer has a computer  at Google. This isn't a good thing as computers are not good for the environment. They contain rare metals that are mined from the earth. Mining is not good for the environment and a lot of people die every year just because of mining,
    <br></br><br></br>
    Employees eyesight can be affected. They are mostly using computers at work. This is bad for eyes as longing at computers for a long period of time could cause your eyes to strain from the effort, which can lead to headaches, blurry vision and dry eyes.
    <br></br><br></br>
    Google also makes Gmail, Hangouts and Google meets. These applications allow people to talk to each other and talking to other people can make people happy. Which is why this is a positive effect. Gmail also reduces the amount of letters written as people can communicate online. This is a positive effect because letters are delivered by cars, planes, trucks and boats. These types of transportation can have a negative effect on the environment as they cause a lot of pollution. But sadly these apps could also have negative effects on people. Gmail and Hangouts can cause Cyberbullying which could have a negative effect on people's health 
    </p><br></br><br></br>
    <h2>How to reduce the effects - </h2>
    <p>They should have mandatory breaks every 2 hours for employees. This way employees could get some rest and this would help in employees bodies not being affected because of sitting in front of a computer for a long duration.

      Every single employee at Google is given a computer. But most people in the software engineering industry already have a laptop/computer. So it would be better if Google would make employees bring their computers. This would decrease the amount of rare metals needed to be mined as the demand for computers will decrease. 

      Google can hire moderators that would moderate people’s activity on their products. The moderators would stop people from doing bad things such as cyberbullying. This will stop users from bullying other users as they would get banned if they bully others. 
    </p>
    <br></br><br></br>

    <h1>Legal and ethical issues surrounding computer use</h1>
    <br></br>
    <p>Google has to worry about spyware, cyberbullying, identity theft, phishing and keystroke logging. Users can post infected links on chrome or gmail and users can click them and get a virus on their computer(i.e spyware). Cyberbullying is also a concern as people can harass others by sending messages on gmail or hangouts. People could act like other people on gmail hence why identity theft is a worry. Phishing is a concern too because people can send emails pretending to be big corporations and then scam people. Another concern is keystroke as people can click on a link that gives the keystroke virus. This can be very bad because people use the search browser Google to login into websites. While logging in they write down their passwords. People can also download movies and songs easily using Chrome as there are many websites that allow you to pirate stuff.  Lastly the employee’s can access users personal information and then sell it.</p>
    <br></br><br></br>

    <h1>Solutions to solve the legal and ethical issues -</h1>
    <br></br>
    <p>They could give big famous companies a verified mark next to their name. This would help avoid phishing scams. A report button would also be nice on Hangouts and Gmail. Users would be able to report other users that are doing harmful things such as bullying, identity theft or posting infected links. They could also have a link checker like many antivirus programs have. There would basically be a green mark beside trusted links and a red mark beside non-trusted links. This would prevent the user from clicking on infected links. They could make a company-wide system in which only people with higher roles could access users personal information. Lastly Google could ban websites that allow the user to download content illegally. </p>


    <button onClick={idk}>+</button>
  <button onClick={sub}>-</button>

  </div>
    
  )
}
