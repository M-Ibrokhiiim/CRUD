import { useState } from 'react'
import './App.css'
import { Box, Button, Container } from '@chakra-ui/react'


// Components
import Header from '@/components/ui/main/header'
import Main from '@/components/ui/main/main'
function App() {
const [count,setCount] = useState(1)
  return (
    <>
    <Container 
      w={'50vw'} 
      h='800px'
    >
      <Header setCount={setCount} count ={count}/>
      <Main count={count}/>
    </Container>
     </>
  )
}

export default App
