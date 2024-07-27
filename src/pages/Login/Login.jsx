import { Avatar, Center, Container, Grid, HStack, Input, VStack } from '../../components';
import './Login.css'

const Login = () => {
    return (
        <>
            <Grid
                width="100%"
                height="100vh"
                bg="primary.200"
            >
                
                <Center height="100%" >
                    <VStack p={50} borderRadius="md" space={4}  >
                        <Center >
                            <Avatar size="2xl" ></Avatar>
                        </Center>
                        <Grid>
                            <Input
                                shadow={2}
                                bg="coolGray.800"
                                placeholder="Insira seu email" />
                        </Grid>
                        <Grid>
                            <Input
                                shadow={2}
                                bg="coolGray.800"
                                placeholder="Insira sua senha" />
                        </Grid>
                        
                    </VStack>
                </Center>

                 
                
                
            </Grid>
        </>
    )
}

export default Login;