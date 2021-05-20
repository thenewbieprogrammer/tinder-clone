import React, {useState} from 'react'
import "../style/TinderPhotoCards.css";
import TinderCard from 'react-tinder-card';

function TinderPhotoCard() {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"
    },
    {
      name: 'Jeff Bezos',
      url: "https://img.jakpost.net/c/2020/02/18/2020_02_18_86871_1581998411._large.jpg"
    }
  ]);
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
            <div style={{backgroundImage: `url(${person.url})` }} className="tinderCard">
              <h3>{person.name}</h3>
            </div>

          </TinderCard>
        ))}
      </div>
      
    </div>
  )
}

export default TinderPhotoCard
