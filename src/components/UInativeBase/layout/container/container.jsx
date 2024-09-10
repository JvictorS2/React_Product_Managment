import { Container } from "native-base"

const ContainerNativeBase = (props) => {
    return (
        <Container {...props} >
         {props.children}
        </Container>
    )
}

export default ContainerNativeBase;