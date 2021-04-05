// @flow 
import  React,{ useState} from 'react';
import { 
    Alert,Glyphicon,Button,Modal,
    FormGroup,FormControl,
    HelpBlock,ButtonToolbar
   } from 'react-bootstrap';
import { Map } from './Map';
export  function MapModal () {

    const [address, setAddress] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   const handleChange = e => {
        setShow(true)
        setAddress(e.target.value)
    };

    return (
        <>
            <div className="col-6 d-flex align-items-center mob_search">
                <div className="text-dark  d-flex align-items-center py-3 w-100" >
                    <div onClick={handleShow}><i className="feather-map-pin mr-2 bg-light rounded-pill p-2 icofont-size" /></div>
                        <div className="search_location text-right w-100">
                            <div className="input-group rounded border-0  overflow-hidden">
                                <input type="text"
                                       className="shadow-none border-0 form-control"
                                        onChange={handleChange} 
                                        onClick={handleShow}
                                        placeholder="Enter Your Location" 
                                        value={address}
                                        />
                                <div className="input-group-prepend">
                                    <button className="border-0 btn bg-primary text-dark bg-white btn-block z-index-0" onClick={handleShow}><i className="feather-truck text-white" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div> 

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                        <Modal.Title>Is this your exact location?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Map closeModal={() => handleClose()}/>
                </Modal.Body>
                <Modal.Footer>
                      
                </Modal.Footer>
      </Modal>
        </>
    );
};