import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from'@material-ui/icons/Save'
import DeleteIcon from'@material-ui/icons/Delete'
import { Delete } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup>
          <Button 
          startIcon={<SaveIcon/>}
          onClick={()=>{
            alert("Hello")
          }}
          size="large"
          variant='contained'
          color="primary">Save</Button>


          <Button 
          startIcon={<DeleteIcon/>}
          onClick={()=>{
            alert("Hello")
          }}
          size="large"
          variant='contained'
          color="secondary">Discard</Button>
        </ButtonGroup>
        
      
      </header>
    </div>
  );
}

export default App;
