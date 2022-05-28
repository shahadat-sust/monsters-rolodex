import { ChangeEventHandler, ChangeEvent } from "react";
import './search-box.styles.css'

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  //onChangeHandler: ChangeEventHandler<HTMLInputElement>
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => (
  <input 
    type="search" 
    className={ `search-box ${className}` } 
    placeholder={ placeholder } 
    onChange={ onChangeHandler }/>
)

/*class SearchBox extends Component {

  render() {
    console.log('render from SearchBox');
    return (
      <input 
        type="search" 
        className={ `search-box ${this.props.className}` } 
        placeholder={ this.props.placeholder } 
        onChange={ this.props.onChangeHandler }/>
    );
  }

}*/

export default SearchBox;