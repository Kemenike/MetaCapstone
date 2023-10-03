import React from 'react'
import Button from './Button.jsx';
import Card from './Card.jsx';
import './Specials.css';

//Image imports
import lemonDish from '../assets/lemon dessert.jpg';
import greekSalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';

function Specials() {
  return (
    <div className='section__container specials'>
      <div className="row">
        <h1 className="displaytitle">Specials</h1>
        <Button info={"Online Menu"} />
      </div>
      <div className="row">
        <Card img={greekSalad}
          dishTitle="Greek Salad"
          dishDescription="Redwine vinegar, robust cherry tomatoes, fresh feta cheese, and olives make this dish truly pop."
          price="$12.99" />
        <Card img={lemonDish}
          dishTitle="Lemon Dessert"
          dishDescription="A multilayered lemon cream cake. Topped with a lemon cream and garnished with a lemon peel."
          price="$5.00" />
        <Card img={bruchetta}
          dishTitle="Bruchetta"
          dishDescription="Toasted ciabatta slice with a delectable tomato, nutty garlic, and complex parmesan cheese create this awe-inspiring dish."
          price="$5.99" />
      </div>
    </div>
  )
}

export default Specials