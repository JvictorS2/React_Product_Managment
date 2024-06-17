
import { Button } from "native-base";


const BtnGeneral = (props) => {
    const { btn_text } = props;
    return (
        <Button>{btn_text}</Button>
    )
}

export default BtnGeneral;