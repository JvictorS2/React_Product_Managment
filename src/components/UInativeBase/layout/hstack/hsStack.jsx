import { HStack } from "native-base"

const HStackNativeBase = (props) => {
    return (
        <HStack>
            {props.children}
        </HStack>
    )
}

export default HStackNativeBase;