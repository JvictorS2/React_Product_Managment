import { useState } from "react";
import { IconButton, Modal } from "..";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

import ModalLogout from "../UImaterial/modal/modalLogout";

const Logout = (props) => {

  const [openModal,setOpenModal] = useState(false)
    return (
      <>
        <IconButton
          icon={<ExitToAppRoundedIcon fontSize="large" />}
          color="tertiary.200"
          onPress={() =>
            setOpenModal(!openModal)
          }
        />
        <Modal open={openModal} setOpen={setOpenModal} >
          {<ModalLogout open={openModal} setOpen={setOpenModal} navigate={props.navigate} ></ModalLogout>}
        </Modal>
      </>
    );
}

export default Logout;