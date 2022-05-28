import { Component } from "react";
import { Monster } from "../../App";
import './card.styles.css'

type CardProps = {
  monster: Monster
}

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
  return (
    <div className='card-container' key={id}>
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
      <h1>{name}</h1>
      <p>
        {email}
      </p>
    </div>
  )
};

/*class Card extends Component {

  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className='card-container' key={id}>
        <img alt={`monster ${this.props.name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h1>{name}</h1>
        <p>
          {email}
        </p>
      </div>
    )
  }

}*/

export default Card;