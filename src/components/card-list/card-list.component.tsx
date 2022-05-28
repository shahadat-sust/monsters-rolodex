import { Component } from 'react';
import { Monster } from '../../App';
import Card from '../card/card.component';
import './card-list.styles.css'

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (
    <div className='card-list'>
      {
        monsters.map(monster => <Card monster={monster} key={monster.id}/>)
      }
    </div>
  );

/*class CardList extends Component {
  
  render() {
    console.log('render from CardList');

    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {
          monsters.map(monster => (<Card monster={monster} key={monster.id}/>))
        }
      </div>
    );
  }

}*/

export default CardList;