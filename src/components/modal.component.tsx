import { Modal, Box } from '@mui/material';

import { FormComponent } from './form.component';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectIsOpen, toggleIsOpen } from '../app/slices/modal.slice';

export const ModalComponent = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsOpen);

  const handleClose = () => {
    dispatch(toggleIsOpen());
  };

  return (
    <Modal
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box><FormComponent /></Box>
    </Modal>
  );
};
