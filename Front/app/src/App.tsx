import { useState } from 'react'
import './App.css'
import { Box, Button, Container } from '@chakra-ui/react'


// Components
import Header from '@/components/ui/main/header'
import Main from '@/components/ui/main/main'
function App() {
const [update,setUpdate] = useState(false)
  return (
    <>
    <Container 
      w={'50vw'} 
      h='800px'
    >
      <Header setUpdate={setUpdate} update ={update}/>
      <Main update={update}/>
    </Container>
     </>
  )
}

export default App
