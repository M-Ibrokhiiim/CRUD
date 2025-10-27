import { Container,Box, Heading,Text} from "@chakra-ui/react"
import { useEffect,useState } from "react"

const Main =({update})=>{
 
  const [tasks,setTasks] = useState([])


  // Tasks API

//GET 
   const fetchTasks = async()=>{
      // const URL = 'http://localhost:8080/todo/tasks'
      try{
        const response = await fetch('http://localhost:8080/todo/tasks')

        if(!response.ok){
          throw new Error('Sorry retry!')
        }

        const data = await response.json()

        setTasks(data)
      }catch(err){
        alert(err)
      }
    }



// DELETE

    const deleteItems = async(id)=>{
      try{
         const response = await fetch(`http://localhost:8080/todo/task/${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json'
          }
         })
         
         if(!response.ok){
          const error = await response.json()
          throw new Error(error.msg)
         }

         fetchTasks()

      }catch(err){
        console.log(err)
      }
    }



  useEffect(()=>{
    fetchTasks()
  },[update])

 return(
    <Container as={'main'}   w={'35vw'}  ml={'11.3vw'} display={'flex'} >
     <Box   w={'40vw'} ml={'-32px'} h={'500px'} overflow={'scroll'}  >
       {tasks.map(task =>{
        return(
          <Heading w={'24.4vw'} textAlign={'left'} mt={'10px'}   display={'flex'} justifyContent={'space-between'} key={task.id} >
              <Text>{task.task}</Text>
              <Text onClick={()=>deleteItems(task.id)} cursor={'pointer'}>X</Text>       
          </Heading>
        )
       })}
     </Box> 
    </Container>
 )
}
export default Main