import React, {useEffect, useState} from 'react'
import "../style/TinderPhotoCards.css";
import TinderCard from 'react-tinder-card';
import _axios from '../AxiosClient/_axios.js';

function TinderPhotoCard() {
  const [people, setPeople] = useState([]);
  
  //useEffect is equivalent to ComponentDidMount
  // the second parameter of useEffect '[]' is to tell the useEffect fn to run the entire code once ..
  // not repeatedly 

 // however if we pass in a variable into these '[]' of the useEffect fn; then whenever 
 // that variable changes in value, the code in the useEffect hook will compute again

  useEffect(() => {
    async function fetchData() {
      const req = await _axios.get("/tinder/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  //console.log(people);

  const swiped = (direction, personToDelete)=> {
    console.log("removing.. " + personToDelete);

  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  }

  return (
    <div className="tinderPhotoCards">
      <div className="tinderPhotoCards__container">
        {people.map(person => (
          <TinderCard
            className="swipeTinderCard"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div style={{backgroundImage: `url(${person.imageURL})` }} className="tinderCard">
              <h3>{person.name}</h3>
            </div>

          </TinderCard>
        ))}
      </div>
      
    </div>
  )
}

export default TinderPhotoCard
