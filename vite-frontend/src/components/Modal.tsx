import { ReactNode } from "react";
import { Button } from "./FormElements/Button";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  buttonName?: string;
  onAdd?: () => void;
};

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  buttonName,
  onAdd,
}) => {
  return (
    isOpen && (
      <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full overflow-x-hidden overflow-y-hidden bg-backgroundOverlay z-10">
        <div className="min-w-[10rem] max-w-[30rem]">
          <div className="relative flex flex-col bg-white border border-solid border-inputBorder bg-clip-padding-box rounded-[20px] p-12">
            {children}
            <div className="flex justify-center gap-10 mt-10">
              {buttonName && (
                <Button
                  text={buttonName}
                  type="button"
                  variant="primary"
                  handleClick={onAdd}
                  className="px-16"
                ></Button>
              )}
              {!!onClose && (
                <Button
                  text="Close"
                  type="button"
                  variant="secondary"
                  handleClick={onClose}
                  className="px-16"
                ></Button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
