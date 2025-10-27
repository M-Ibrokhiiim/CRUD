import { Container,Box, Heading,Text} from "@chakra-ui/react"
import { useEffect,useState } from "react"

const Main =({count})=>{
 

 return(
    <Container as={'main'}   w={'25vw'}  display={'flex'} >
     <Box   w={'25vw'} ml={'-32px'} h={'500px'} overflow={'scroll'}  >
       <Heading w={'23.2vw'} textAlign={'left'} mt={'10px'}   display={'flex'} justifyContent={'space-between'}>
         <Text> 1.Run from today</Text>
          <Text onClick={()=>{
            alert('Clicked')
          }}>X</Text>
       </Heading>
       <Heading w={'23.2vw'} textAlign={'left'} mt={'10px'}   display={'flex'} justifyContent={'space-between'}>
         <Text> 1.Run from today. { count }</Text>
          <Text onClick={()=>{
            alert('Clicked')
          }}>X</Text>
       </Heading>
     </Box>
    </Container>
 )
}
export default Main