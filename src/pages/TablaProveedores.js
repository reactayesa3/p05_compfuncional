import React, { useState } from 'react'
import CustomModal from '../components/CustomModal';
import Modal from '../components/Modal';

export default function TablaProveedores(props) {

    const {proveedores, titulo, handleDeleteProveedor} = props;

    const [isShowModal, setIsShowModal] = useState(false);
    const [idProveedor, setIdProveedor] = useState(null);

    const handleCloseModal = () => {
        setIsShowModal(false);
        setIdProveedor(null);
    }

    const handleOpenModal = () => {
        setIsShowModal(true);
    }

    const handleSelectProveedor = id => {
        setIdProveedor(id);
        handleOpenModal();
    }

    const handleConfirmDeleteProveedor = () => {
        handleDeleteProveedor(idProveedor);
        handleCloseModal();
    }

  return (
    <>
        <h1>{titulo}</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>CIF</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {proveedores.map(proveedor => {
                    return (
                        <tr key={proveedor.id}>
                            <td>{proveedor.nombre}</td>
                            <td>{proveedor.cif}</td>
                            <td onClick={() => handleSelectProveedor(proveedor.id)}>Eliminar</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        {/* {isShowModal && <Modal text={'¿Está seguro de eliminar el proveedor?'} 
                               handleCancelAction={handleCloseModal}
                               handleConfirmAction={handleConfirmDeleteProveedor}/>} */}
        {isShowModal && <CustomModal>
                            <p>¿Está seguro de eliminar el proveedor?</p>
                            <div className="modal-buttons">
                                <button className='outline'
                                        onClick={handleCloseModal}>
                                            Cancelar
                                </button>
                                <button onClick={handleConfirmDeleteProveedor}>
                                    Aceptar
                                </button>
                            </div>
                        </CustomModal>}
        
    </>
  )
}
