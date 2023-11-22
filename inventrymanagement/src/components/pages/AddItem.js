import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemService from "../../services/ItemService";
import Card from 'react-bootstrap/Card';

const AddItem = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    itemId: "A002",
    itemName: "Uno",
    category: "Board",
    quantity: "8",
    price: "9",
  });

  const changeitemIdhandler = (event) => {
    setState({ ...state, itemId: event.target.value });
  };

  const changeItemNameHandler = (event) => {
    setState({ ...state, itemName: event.target.value });
  };

  const changeCategoryHandler = (event) => {
    setState({ ...state, category: event.target.value });
  };

  const changeQuantityHandler = (event) => {
    setState({ ...state, quantity: event.target.value });
  };

  const changePriceHandler = (event) => {
    setState({ ...state, price: event.target.value });
  };

  const saveItem = (e) => {
    e.preventDefault();
    let item = {
      itemId: state.itemId,
      itemName: state.itemName,
      category: state.category,
      quantity: state.quantity,
      price: state.price,
    };

    ItemService.saveItems(item).then((res) => {
      navigate("/Home");
    });
  };
  const cardStyle = {
    width: '30rem',
    height:'42rem'
  };
  
  return (
    <div>
       <div className="container" style={{ margin: '-45px -50px' }}>
          <div className="row">
          <Card className="bg-white text-primary" style={cardStyle}>
              
              <Card.Body>
              <h3 className="text-center">Add Item</h3>
                <form>
                  <div className="form-group" style={{ margin: '-45px -50px' }}>
                    <label class="form-label" style={{ marginLeft: '0px' }}>Item ID</label>
                    <input
                      placeholder="Item Id"
                      name="itemId"
                      type="text"
                      className="form-control"
                      value={state.itemId}
                      onChange={changeitemIdhandler}
                      style={{ padding: '1px', width: '10cm', height: '1cm' }} 
                    />
                  </div>
                  <div className="form-group" style={{ margin: '30px -50px' }}>
                    <label class="form-label" style={{ marginLeft: '0px' }} >Item Name</label>
                    <input
                      placeholder="Item Name"
                      name="itemName"
                      type="text"
                      className="form-control"
                      value={state.itemName}
                      onChange={changeItemNameHandler}
                      style={{ padding: '1px', width: '10cm', height: '1cm' }} 
                    />
                  </div>
                  <div className="form-group" style={{ margin: '-40px -50px' }}>
                    <label class="form-label" style={{ marginLeft: '0px' }}>category</label>
                    <input
                      placeholder="Category"
                      name="category"
                      type="text"
                      className="form-control"
                      value={state.category}
                      onChange={changeCategoryHandler}
                      style={{ padding: '1px', width: '10cm', height: '1cm' }} 
                    />
                  </div>
                  <div className="form-group" style={{ margin: '20px -50px' }}>
                    <label class="form-label" style={{ marginLeft: '0px' }}>Quantity</label>
                    <input
                      placeholder="Quantity"
                      name="quantity"
                      type="text"
                      className="form-control"
                      value={state.quantity}
                      onChange={changeQuantityHandler}
                      style={{ padding: '1px', width: '10cm', height: '1cm' }} 
                    />
                  </div>
                  <div className="form-group" style={{ margin: '-40px -50px' }}>
                    <label class="form-label" style={{ marginLeft: '0px' }}>Price</label>
                    <input
                      placeholder="Price"
                      name="price"
                      type="text"
                      className="form-control"
                      value={state.price}
                      onChange={changePriceHandler}
                      style={{ padding: '1px', width: '10cm', height: '1cm' }} 
                    />
                  </div>
                  <button className="btn btn-success" onClick={saveItem} >
                    Save
                  </button>
                  <Link
                    to="/Home"
                    className="btn btn-danger"
                    style={{  margin: '80px 60px' }}
                  >
                    Cancel
                  </Link>
                  {/* <button className="btn btn-danger" onClick={}} style={{marginLeft:"10px"}}>Cancel</button> */}
                </form>
                </Card.Body>
                </Card>
          </div>
        </div>
    </div>
  );
};
export default AddItem;
