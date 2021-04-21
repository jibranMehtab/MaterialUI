import './App.css';
import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from'@material-ui/icons/Save'
import DeleteIcon from'@material-ui/icons/Delete'
import CheckBox from '@material-ui/core/Checkbox'
import FormControllabel from '@material-ui/core/FormControlLabel'
import TextFiled from '@material-ui/core/TextField'
import {green,orange} from '@material-ui/core/colors'
import {makeStyles,ThemeProvider,createMuiTheme} from '@material-ui/core/styles'
import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'


const useStyle = makeStyles({
  root:{
    background:'red',
    border:0,
    margin:10,
    color:'white'
  }
})

const theme=createMuiTheme({
  palette:{
    primary:{
      main:green[500],
    },
    secondary:{
      main:orange[500],
    }
  }
})

function ButtonStyle(){
  const classes=useStyle();
  return <Button className={classes.root}>Test Button</Button>
}

function CheckBoxExample(){
  const [checked,setChecked]=React.useState(true)
  return(
    <div>
      
      <FormControllabel
        control={
          <CheckBox
            checked={checked}
            onChange={(e)=>setChecked(e.target.checked)}
            icon={<DeleteIcon/>}
            checkedIcon={<SaveIcon/>}
            inputProps={{
              'aria-label':'secondary checkbox'
            }}
            color="secondary"/>
        }
        label="Checking Testbox"
        />
        
      
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth='xs'>//sm,xs,md

        <header className="App-header">

          <AppBar>
            <ToolBar>
              <IconButton>
              <MenuIcon/>
              </IconButton>
              <Typography variant='h2'>MUI Design</Typography>
              <Button>Login</Button>
            </ToolBar>
          </AppBar>
      
          <Typography variant='h3'>Welcome to UI</Typography>
          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{height:75 ,width:'100%'}}></Paper>
            </Grid>
            <Grid item xs={3} sm={6}>
            <Paper style={{height:75 ,width:'100%'}}></Paper>
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{height:75 ,width:'100%'}}></Paper>
          </Grid>
          </Grid>
          <ButtonStyle/>
          <TextFiled
          variant='outlined'
          color="Secondary"
          type="email"
          label="Email"
          placeholder="text@gmail.com"/>

          <CheckBoxExample/>

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
          </Container>
        </ThemeProvider>
      
    </div>
  );
}

export default App;
