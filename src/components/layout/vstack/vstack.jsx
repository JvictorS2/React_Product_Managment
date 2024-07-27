import { VStack } from "native-base"

const VstackNativeBase = (props) => {
    return (
        <VStack {...props} >
            {props.children}
        </VStack>
    )
}

export default VstackNativeBase;