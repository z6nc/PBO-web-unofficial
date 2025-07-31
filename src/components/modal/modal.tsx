import ReactDOM from 'react-dom';

interface ModalProps {
    children: React.ReactNode;
    estilo?: string;
}
export const Modal = ({ children, estilo }: ModalProps) => {

    return ReactDOM.createPortal(

        <div className={`fixed inset-0 flex  justify-center items-center  z-50  ${estilo}`}>
            {children}
        </div>,
        document.getElementById('modal')!
    )
}