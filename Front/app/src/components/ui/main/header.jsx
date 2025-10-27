import { Box, Button, Container, Group, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
const Header = ({setUpdate,update})=>{

const  [task,setTask] =useState('')


// POST
    const addItems= async(task)=>{
      try{
         const response = await fetch('http://localhost:8080/todo/task',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({task:task})
         })
        
         if(!response.ok){
           const error =await response.json()
           throw new Error(error.msg)
         }
        setTask('')
        setUpdate(true)
        const success =await response.json();
        setUpdate(false)
      }catch(err){
        console.log(err)
      }
    }

    return (

     <Container as={'header'}>
        <Box
          p={'6px'}
        >
        <Heading size={'5xl'} fontWeight={'900'}>
            To Do
        </Heading>
        <Box p={'40px'} >
          <Group attached>
            <Input  onChange = {e=>setTask(e.target.value)} value={task} placeholder="Type..." w={'20vw'} h={'39px'} outline={'none'}  fontSize={'20px'} border={'1px solid blue'} borderRight={'none'}/>
            <Button bg='blue.400' fontSize={'20px'} w={'90px'}  _active={{bg:'blue.500',border:'none',outline:'none'}} _hover={{cursor:'pointer'}} outline={'none'} border={'none'}
            onClick={()=>{addItems(task)}}
            >
                Add
            </Button> 
          </Group>
        </Box>
        </Box>
     </Container>
    )
}

export default Header