import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemService from "../../services/ItemService";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import "./editItem.css";

const DeleteItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [state, setState] = useState({
    itemId: id,
    itemName: "",
    category: "",
    quantity: "",
    price: "",
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
  useEffect(() => {
    if (id) {
      ItemService.getItemById(id).then((res) => {
        console.log(id);
        let item = res.data;
        setState({
          itemId: item.itemId,
          itemName: item.itemName,
          category: item.category,
          quantity: item.quantity,
          price: item.price,
        });
      });
    }
  }, []);
  

  const deleteItem = (e) => {
    e.preventDefault();
    ItemService.deleteItem(id).then((res) => {
        alert("Item "+id+" was deleted !")
      navigate("/Home");
    });
  };


  const cardStyle = {
    width: "30rem",
    height: "42rem",
  };

  return (
    <div>
      <div className="container" style={{ margin: "-45px -50px" }}>
        <div className="row">
          <Card className="bg-white text-primary" style={cardStyle}>
            <Card.Body>
              <h3 className="text-center">Add Item</h3>
              <form>
                <div className="form-group" style={{ margin: "-45px -50px" }}>
                  <label class="form-label" style={{ marginLeft: "0px" }}>
                    Item ID
                  </label>
                  <input
                    placeholder="Item Id"
                    name="itemId"
                    type="text"
                    className="form-control"
                    value={state.itemId}
                    onChange={changeitemIdhandler}
                    style={{ padding: "1px", width: "10cm", height: "1cm" }}
                  />
                </div>
                <div className="form-group" style={{ margin: "30px -50px" }}>
                  <label class="form-label" style={{ marginLeft: "0px" }}>
                    Item Name
                  </label>
                  <input
                    placeholder="Item Name"
                    name="itemName"
                    type="text"
                    className="form-control"
                    value={state.itemName}
                    onChange={changeItemNameHandler}
                    style={{ padding: "1px", width: "10cm", height: "1cm" }}
                  />
                </div>
                <div className="form-group" style={{ margin: "-40px -50px" }}>
                  <label class="form-label" style={{ marginLeft: "0px" }}>
                    category
                  </label>
                  <input
                    placeholder="Category"
                    name="category"
                    type="text"
                    className="form-control"
                    value={state.category}
                    onChange={changeCategoryHandler}
                    style={{ padding: "1px", width: "10cm", height: "1cm" }}
                  />
                </div>
                <div className="form-group" style={{ margin: "20px -50px" }}>
                  <label class="form-label" style={{ marginLeft: "0px" }}>
                    Quantity
                  </label>
                  <input
                    placeholder="Quantity"
                    name="quantity"
                    type="text"
                    className="form-control"
                    value={state.quantity}
                    onChange={changeQuantityHandler}
                    style={{ padding: "1px", width: "10cm", height: "1cm" }}
                  />
                </div>
                <div className="form-group" style={{ margin: "-40px -50px" }}>
                  <label class="form-label" style={{ marginLeft: "0px" }}>
                    Price
                  </label>
                  <input
                    placeholder="Price"
                    name="price"
                    type="text"
                    className="form-control"
                    value={state.price}
                    onChange={changePriceHandler}
                    style={{ padding: "1px", width: "10cm", height: "1cm" }}
                  />
                </div>
                <div className="butttonPanel">
                  {/* <button className="btn btn-success" onClick={updateItem}  style={{ marginLeft: "-65px" }}>Update</button> */}
                  <button className="btn btn-danger" style={{ marginLeft: "40px" }} onClick={deleteItem}>Delete</button>
                  <Link to="/Home" className="btn btn-warning">Cancel</Link>
                </div>
                {/* <button className="btn btn-danger" onClick={}} style={{marginLeft:"10px"}}>Cancel</button> */}
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default DeleteItem;
