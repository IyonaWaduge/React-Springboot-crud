import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ItemService from "../../services/ItemService";

export default function UpdatePopup(props) {
  // --- Hooks ------------
  const [state, setState] = useState();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setState(props.value);
  }, [props.value]);

  //----------------------

  const changeitemIdhandler = (event) => {
    setState({ ...state, itemId: event.target.value });
  };

  const changeItemNameHandler = (event) => {
    setState({ ...state, itemName: event.target.value });
  };

  const changeCategoryHandler = (event) => {
    setState({ ...state, category: event.target.value });
  };

  // const keyPressHandler=(event)=>{
  //   if(event.keyCode ===45){
  //     return
  //   }else{
  //     setState({ ...state, quantity: event.target.value });
  //   }
  // }
  const changeQuantityHandler = (event) => {
    event.preventDefault();
    
    
    let originalVal = state.quantity;

      if(event.target.value>0){ 
        console.log("inside if quantity",event.target.value); 
        setState({ ...state, quantity: event.target.value});
      } else {
        console.log("inside else quantity",originalVal); 
        setState({ ...state, quantity:originalVal });
      }

      console.log(state);
  };

  const changePriceHandler = (event) => {
    setState({ ...state, price: event.target.value });
  };

  const updateItem = (e) => {
    e.preventDefault();

    // if (props.value.itemId.length == 0) {
    //   setError(true);
    //   return;
    // }
    ItemService.editItem(state.id, state).then((res) => {
      //window.location.reload(true);//refersh the page
      props.edit(state);
      props.onClose();
    });
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={props.onClose}>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Item
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
                  defaultValue={props.value.itemId}
                  onChange={changeitemIdhandler}
                  style={{ padding: "1px", width: "10cm", height: "1cm" }}
                  required
                />
                <div class="invalid-feedback">Please provide a valid item name</div>
                {/* {error?
                <label>Item name can't be empty</label>:"" */}
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
                  defaultValue={props.value.itemName}
                  onChange={changeItemNameHandler}
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
                  defaultValue={props.value.category}
                  
                  onChange={changeCategoryHandler}
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
                  type="number"
                  value={!( state && state.quantity)?'':state.quantity}
                  // onKeyDown={keyPressHandler}
                  className="form-control"
                  defaultValue={props.value.quantity}
                  onChange={changeQuantityHandler}
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
                  defaultValue={props.value.price}
                  onChange={changePriceHandler}
                  style={{ padding: "1px", width: "10cm", height: "1cm" }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-warning" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="btn btn-success" onClick={updateItem}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
