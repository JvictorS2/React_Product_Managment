import { Avatar } from "native-base";

const AvatarGeneral = (props) => {
    return (
        <Avatar {...props} source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }}>
            AJ
        </Avatar>
    )
}

export default AvatarGeneral;