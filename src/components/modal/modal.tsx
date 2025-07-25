import ReactDOM from 'react-dom';

interface ModalProps {
    children: React.ReactNode;
}
export const Modal = ({ children }: ModalProps) => {

    return ReactDOM.createPortal(

        <div className='fixed inset-0 flex  justify-center items-center  z-50  '>
            {children}
        </div>,
        document.getElementById('modal')!
    )
}