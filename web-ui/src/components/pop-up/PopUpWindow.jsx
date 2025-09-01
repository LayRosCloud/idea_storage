import {createPortal} from "react-dom";


function PopUpWindow({isVisible, children}) {
    return createPortal(
        <div className={'popup_background'.concat(' ', isVisible ? 'popup_active' : '')}>
            <div className='popup_window'>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root'))
}

export default PopUpWindow