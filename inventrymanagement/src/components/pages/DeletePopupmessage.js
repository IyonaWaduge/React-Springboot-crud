import { Modal } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import ItemService from '../../services/ItemService';

export default function DeletePopupmessage(props) {
    const [state, setState] = useState();
    
    useEffect(() => {
        setState(props.value);
      }, [props.value]);


      const deleteItem = (e) => {
        e.preventDefault();
        ItemService.deleteItem((state.id)).then((res) => {
            // alert("Item "+state.id+" was deleted !");
            // props.onHide();
            if(res.status==200){
             props.delete(state.id);
             console.log(props.onHide());
             props.onHide();
           
        }
        });
        
      }
  return (
    <div>
         <Modal
        {...props}
        
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={props.onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
           Do you want to delete forllowing item?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container" style={{ margin: "10px" }}>
            <div className="row">
                
              
              <div className="form-group" style={{ margin: "30px 10px" }}>
                <label class="form-label" style={{ marginLeft: "5px" }}>
                  Item Name
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-warning" onClick={props.onHide}>Cancel</Button>
          <Button variant="btn btn-success" onClick={deleteItem}>
           Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
