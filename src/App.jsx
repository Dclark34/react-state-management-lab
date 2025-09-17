import { useState } from "react";

import './App.css';

const App = () => {

const [team, setTeam] = useState([]);

const [money, setMoney] = useState(100);

const [zombieFighters, setZombieFighters] = useState(
  [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]
)


const handleFighter = (pickedFighter) => {
  if (money < pickedFighter.price) {
    console.log("Not Enough Money");
    return;
  } else {
  const subtractedMoney = money - pickedFighter.price;// subtract money
  setMoney(subtractedMoney);
  }
  const newTeam = [...team, pickedFighter];
  setTeam(newTeam); //ADD A MEMBER TO THE TEAM.
  console.log(newTeam);
  const updateFighters = zombieFighters.filter(fighter => fighter.id !== pickedFighter.id);//remove fighter function. fighter is a passed object. states it cant be the same to your picked fighter (id).
  setZombieFighters(updateFighters);
}








  return (
    <>
    <h1>Zombie Fighter!</h1>
    {/* START HERE STEP 7 in HW: Need a ternerary that checks if setTeam is empty. If it is, display message: add team members. 
    IF not, displays UI with chosen team members. Above or below choices? */}
    <h3>Money Left: <span>{money}</span></h3>
    <ul>
      {zombieFighters.map((fighter) => (
        <li key={fighter.id}>
          <div>
            <img src={fighter.img} />
            <p>{fighter.name}</p>
            <p><span>Price: </span>{fighter.price}</p>
            <p><span>Strength: </span>{fighter.strength}</p>
            <p><span>Agility: </span>{fighter.agility}</p>
            <button onClick={() => handleFighter(fighter)} className="add-button" id="add-button">Add to Team</button>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
}


export default App
