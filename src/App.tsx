import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string,
  name: string,
  email: string
};

const App = () => {
  console.log('render from App');

  const [ searchText, setSearchText ] = useState('');
  const [ monsters, setMonsters ] = useState<Monster[]>([]);
  const [ filteredMonsters, setFilteredMonsters ] = useState<Monster[]>([]); 

  useEffect(() => {
    async function fetchData() {
      console.log('fetching monsters');

      const monsters: Monster[] = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(monsters);
      /*const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      setMonsters(users
        .map(u => { 
          return { id: u.id, name: u.name, email: u.email }
        }));*/
    }
    
    fetchData();
  }, []);

  useEffect(() => {
    console.log('filtering monsters');
    const filteredMonsters: Monster[] = monsters
    .filter(m => 
        m.name.toLocaleLowerCase().includes(searchText));
    /*const filteredMonsters = monsters
    .filter(m => 
        m.name.toLocaleLowerCase().includes(searchText))
    .map(u => { 
        return { id: u.id, name: u.name, email: u.email }
    });*/
    setFilteredMonsters(filteredMonsters);
  }, [ searchText, monsters ]);

  const onSearchTextChanged = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchTextInput = event.target.value.toLocaleLowerCase();
    setSearchText(searchTextInput);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Mosters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={ onSearchTextChanged } />
      <CardList
        monsters= { filteredMonsters }/>
    </div>
  );
};

/*class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: ''
    };
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    this.setState(
      () => {
        return {
          monsters: users
          .map(u => { 
            return { id: u.id, name: u.name, email: u.email }
          })
        }
      }
    )
  }

  onSearchTextChanged = (event) => {
    const searchText = event.target.value.toLocaleLowerCase();
    
    this.setState(() => {
      return { searchText }
    });
  }

  render() {
    console.log('render from App');
    const { monsters, searchText } = this.state;

    const filteredMonsters = monsters
    .filter(m => 
        m.name.toLocaleLowerCase().includes(searchText))
    .map(u => { 
        return { id: u.id, name: u.name, email: u.email }
    });

    return (
      <div className="App">
        <h1 className='app-title'>Mosters Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          placeholder="search monsters"
          onChangeHandler={ this.onSearchTextChanged } />
        <CardList
          monsters= { filteredMonsters }/>
      </div>
    );
  }
}*/

export default App;
