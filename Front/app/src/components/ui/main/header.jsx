import { Box, Button, Container, Group, Heading, Input } from "@chakra-ui/react"
const Header = ({setCount,count})=>{
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
            <Input placeholder="Type..." w={'20vw'} h={'39px'} outline={'none'}  fontSize={'20px'} border={'1px solid blue'} borderRight={'none'}/>
            <Button bg='blue.400' fontSize={'20px'} w={'90px'}  _active={{bg:'blue.500',border:'none',outline:'none'}} _hover={{cursor:'pointer'}} outline={'none'} border={'none'}
             onClick={()=>{setCount(count+1)}}
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