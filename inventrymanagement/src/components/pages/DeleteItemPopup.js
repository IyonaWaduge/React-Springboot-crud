import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ItemService from "../../services/ItemService";

export default function DeleteItemPopup(props) {
    //--- Hooks 
  const [state, setState] = useState();


  useEffect(() => {
    setState(props.value);
  }, [props.value]);

  //

 
  const deleteItem = (e) => {
    e.preventDefault();
    ItemService.deleteItem(state.id).then((res) => {
        alert("Item "+state.id+" was deleted !");
        props.onHide();
        if(res.status==200){
        console.log("res");
       
    }
    });
  };
  return (
    <div>
        <Modal
        {...props}
        size="md"
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
              <div className="form-group" style={{ margin: "-20px 10px" }}>
                <label class="form-label" style={{ marginLeft: "5px" }}>
                  Item ID
                </label>
                <input
                  placeholder="Item Id"
                  name="itemId"
                  type="text"
                  className="form-control"
                  value={props.value.itemId}
                 
                  style={{ padding: "1px", width: "10cm", height: "1cm" }}
                />
              </div>
              <div className="form-group" style={{ margin: "30px 10px" }}>
                <label class="form-label" style={{ marginLeft: "5px" }}>
                  Item Name
                </label>
                <input
                  placeholder="Item Name"
                  name="itemName"
                  type="text"
                  className="form-control"
                  value={props.value.itemName}
                  style={{ padding: "1px", width: "10cm", height: "1cm" }}
                />
              </div>
              <div className="form-group" style={{ margin: "-20px 10px" }}>
                <label class="form-label" style={{ marginLeft: "5px" }}>
                  category
                </label>
                <input
                  placeholder="Category"
                  name="category"
                  type="text"
                  className="form-control"
                 value={props.value.category}
                  
                  style={{ padding: "1px", width: "10cm", height: "1cm" }}
                />
              </div>
              <div className="form-group" style={{ margin: "30px 10px" }}>
                <label class="form-label" style={{ marginLeft: "5px" }}>
                  Quantity
                </label>
                <input
                  placeholder="Quantity"
                  name="quantity"
                  type="text"
                  className="form-control"
                  value={props.value.quantity}
                  style={{ padding: "1px", width: "10cm", height: "1cm" }}
                />
              </div>
              <div className="form-group" style={{ margin: "-20px 10px" }}>
                <label class="form-label" style={{ marginLeft: "5px" }}>
                  Price
                </label>
                <input
                  placeholder="Price"
                  name="price"
                  type="text"
                  className="form-control"
                  value={props.value.price}
                  style={{ padding: "1px", width: "10cm", height: "1cm" }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-warning" onClick={props.onHide}>Close</Button>
          <Button variant="btn btn-success" onClick={deleteItem}>
           Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
