import './App.css';
import Content from './components/show-content'
import { createGlobalStyle } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

function App() {
  const for820Width = useMediaQuery({query: '(max-width: 820px)'})
  const for1020Height = useMediaQuery({query: '(min-height: 1020px)'})
  const root = document.getElementById('root')

  if(for820Width || for1020Height){
    root.style.display = 'flex'
    root.style.alignItems = 'center'
    root.style.justifyContent = 'center'
  }
  else{
    root.style.display = 'block'
  }

  return (
    <>
        <GlobalStyle />

        <Content />
    </> 
  )
}

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    color: inherit;
    box-sizing: border-box;
    list-style: none;
  }

  #root{
    position: relative;
    border: 1px solid transparent;
    min-height: 100vh;
  }
`

export default App;