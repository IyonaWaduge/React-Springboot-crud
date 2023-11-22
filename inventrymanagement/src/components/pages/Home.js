import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import Table from "react-bootstrap/Table";
import ItemService from "../../services/ItemService";

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);

  //--------------edit item normal----------
  const editItem = (id) => {
    const url = `/EditItem/${id}`;
    navigate(`/EditItem/${id}`);
    console.log(url);
  };
  //--------------edit item normal----------

  const deleteItem = (id) => {
    navigate(`/DeleteItem/${id}`);
  };

  useEffect(() => {
    ItemService.getAllItems().then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div>
      <div className="title">
        <h1>Manage Items</h1>
      </div>
      <div className="addItemBtn">
        <Link to="/AddItem">
          <button className="addItem" type="button" value="OK">
            + Add Item
          </button>
        </Link>
      </div>
      <div className="itemTable">
        <Table striped bordered hover variant="thead-light">
          <thead>
            <tr className="table-success">
              <th>#</th>
              <th>Item Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.itemId}</td>
                <td>{item.itemName}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  {/* Cell: (props) => (
         <button id="test" onClick={alert(JSON.stringify(props))}>
            Löschen 
         </button>
      ) */}
                  {/* <Link className="btn btn-success" to={'/editItem/${item.id}'}>Update</Link> */}

                  <button
                    className="btn btn-success"
                    onClick={()=>editItem(item.id)}
                    style={{ marginRight: "20px", marginLeft: "10px" }}
                  >
                    {" "}
                    Update
                    {/* <EditIcon /> */}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(item.id)}
                    style={{ marginRight: "-20px", marginLeft: "10px" }}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
