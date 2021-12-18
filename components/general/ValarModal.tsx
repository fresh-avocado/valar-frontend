import { MutableRefObject, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal";
import { KIND } from "baseui/button";
import { Spinner } from "baseui/spinner";

interface ValarModalProps {
  title: string;
  body?: any;
  isOpen: boolean;
  okText?: string;
  cancelText?: string;
  showLoader?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const ValarModal: React.FC<ValarModalProps> = (props) => {
  return (
    <Modal
      onClose={() => props.onCancel}
      isOpen={props.isOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
      overrides={{
        Close: {
          style: ({ $theme }) => ({
            display: "none",
          }),
        },
      }}
    >
      <ModalHeader>{props.title}</ModalHeader>
      {!props.showLoader && <ModalBody>{props.body}</ModalBody>}
      {props.showLoader && (
        <ModalBody>
          <div className="flex justify-center items-center">
            <Spinner
              overrides={{
                ActivePath: {
                  style: ({ $theme }) => ({ fill: $theme.colors.primary }),
                },
              }}
            />
          </div>
        </ModalBody>
      )}
      <ModalFooter>
        {props.okText && (
          <ModalButton onClick={props.onConfirm} kind={KIND.secondary}>
            {props.okText}
          </ModalButton>
        )}
        {props.cancelText && (
          <ModalButton onClick={props.onCancel}>{props.cancelText}</ModalButton>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default ValarModal;
