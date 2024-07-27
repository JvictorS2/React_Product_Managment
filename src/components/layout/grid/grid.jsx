import { Box } from "native-base"

const BoxNativeBase = (props) => {
    return (
        <Box {...props} >
            {props.children}
        </Box>
    )
}

export default BoxNativeBase;