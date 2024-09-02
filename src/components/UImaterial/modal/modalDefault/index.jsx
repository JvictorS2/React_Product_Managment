import * as React from "react";
import Modal from "@mui/material/Modal";

const MyModal = ({ open, setOpen, children }) => {
  return (
    <>
      <Modal open={open} onClose={() => setOpen(!open)}>
        <>{children}</>
      </Modal>
    </>
  );
};

export default MyModal;
