import { Input } from "native-base"

const InputGeneral = (props) => {
    const { input_text } = props;
    return (
        <Input placeholder={input_text} ></Input>
    )
}

export default InputGeneral;