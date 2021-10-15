import React, { useContext } from 'react'
import './style/Modal.css'
import { DataContext } from './DataProvider'

export const Modal = () => {
    const { setOpenModal, closeModal } = useContext(DataContext)
    return (
        <div className="modal">
            <div className="modal-content">
                <p>Albania</p>
                <table className="table-modal">
                    <tbody>
                        <tr>
                            <td><img src="/img/confirmed.png" alt="" height="30" /></td>
                            <td>Total Confirmed</td>
                            <td>132215</td>
                        </tr>
                        <tr>
                            <td><img src="/img/deaths.png" alt="" height="30" /></td>
                            <td>Total Deaths</td>
                            <td>2812</td>
                        </tr>
                        <tr>
                            <td><img src="/img/recovered.png" alt="" height="30" /></td>
                            <td>Total Recovered</td>
                            <td>13230</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={() => closeModal(false)}>OK</button>
            </div>
        </div>
    )
}

export default Modal
