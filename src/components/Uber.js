import React, {useState} from 'react'

export const Uber = () => {
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
    <p>The salary of a software engineer at Uber is approximately 171k per year </p>
    <br></br><br></br>

    <h2>How they use computers -</h2><br></br>
    <p>At Uber computers are used to make their mobile applications and websites. Like other companies, computers are also used for promoting the business by creating ads.  </p>
<br></br>
    <h2>Effects on human health and environment caused by using computers at Google - </h2>
<br></br>
<p>
Uber is using computers to make it easy for people to travel, plus it’s making it easier for people order food online and get it at their doorstep. Which is how Uber is making people lazy. People don’t have to go outside to get food. They can easily get food by ordering online. This is a negative effect on humans health as this makes humans inactive which can furthermore cause problems to their body. 
<br></br>


Uber makes it easy for people to use cars as people can easily call an Uber. This isn’t good for the environment because we should be using the least amount of cars possible. Most cars in the world are not electric and petroleum cars can cause a good amount of pollution. Uber gives people the opportunity of going anywhere. Many people use an uber to go to places, but sometimes getting an Uber is not necessary. As people can walk and bike. Uber is encouraging people to travel using cars however cars are bad for the environment.   

<br></br><br></br>
Germs could easily spread because of Uber. Many people sit in the same car as other people and people can get sick because of all the germs.  

<br></br><br></br>
Uber reduces the need for more cars. Cars contain many different metals that are mined from the earth. These metals are mostly mined from the earth and as said before mining is not good for the environment. Using uber, people can travel in other people’s cars. Uber basically reduces the need for cars. Which means less people have to buy cars and less minerals are needed to be mined.
<br></br><br></br>

Uber has a car pool feature which is reducing the amount of carbon dioxide being spread in the atmosphere because in uber people who are going to the same destination share the same car. So rather than having 2 separate cars going to the same place, Uber makes it possible to use only 1 car. 	This method uses less car hence why less carbon dioxide is spread into the atmosphere. 
    </p><br></br><br></br>

    <h2>How to reduce the effects - </h2>
    <p>If a person is ordering food very frequently. Uber could stop that person from ordering food for a few days. This would force the user to make food themselves or go outside and get it. 

    If a user's destination is really close, like less than 2 km away, then Uber should not let the person use the app. This would force the person to walk to their destination.
    </p>    
    <br></br><br></br>

    <h1>Legal and ethical issues surrounding computer use</h1>
    <br></br>
    <p>Getting a virus such as a trojan or spyware is possible using the Uber platform as using the Uber app drivers and passengers could talk to each other as a consequence cyberbullying can also be considered a concern. But the biggest with the Uber app is that a hacker could hack the system and get the location of every single driver. This puts the life of drivers in danger. Hackers can also get the user credit card info as the user has to give that in order to use the Uber app. Hackers are not the only ones who could steal information. Employees could also steal it. The biggest legal and ethical concern for Uber is their database. As they have a lot of valuable information in it.</p>
    <br></br><br></br>

    <h1>Solutions to solve the legal and ethical issues -</h1>
    <br></br>
    <p>Uber could remove the chatting system as the rider has access to the driver's phone number. This would remove the chances of getting a virus by clicking on an infected link. To protect their database from getting hacked they could hire a special cyber security team that prevents people from hacking in the system. To prevent the employees from getting into the database they could make a security system that would not let employees enter the database. They could also make another security team that just monitors the employees use of computers. They would make sure that employees are not doing anything that would cause damage to the company or customers.   </p>

  <button onClick={idk}>+</button>
  <button onClick={sub}>-</button>

  </div>
  )
}
