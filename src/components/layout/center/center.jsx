import { Center } from "native-base"

const CenterNativeBase = (props) => {
    return (
        <Center {...props} >
            {props.children}
        </Center>
    )
}

export default CenterNativeBase;