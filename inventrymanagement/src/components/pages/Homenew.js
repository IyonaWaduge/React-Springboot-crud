import React, { useState, useEffect } from "react";
import { Link} from 'react-router-dom';
import "./home.css";
import Table from "react-bootstrap/Table";
import ItemService from "../../services/ItemService";
import UpdateItemPopup from "./UpdateItemPopup";
import DeletePopupmessage from "./DeletePopupmessage";
import UpdatePopup from "./UpdatePopup";


const Homenew = () => {

  const [items, setItems] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  const [value, setValue] = React.useState({});

  useEffect(() => {
    ItemService.getAllItems().then((response) => {
      setItems(response.data);
    });
  }, []);

  const setModalShowParent = (i) => {
    setModalShow(true);
    console.log(i);
    setValue(i);
    }
    const setDeleteModalShowParent = (i) => {
      setDeleteModalShow(true);
      setValue(i);
      }
  
  function deleteItem(id){
    const newList=items.filter(li=>li.id!==id);
          setItems(newList);
  }
  function edit(item1){

    console.log("item1 =>",item1);
     
      const newList=items.map(li=>{
        
        return li.id==item1.id ?{...item1}:li  ;
      });
      console.log("newList =>",newList);
      setItems(newList);
  }
  return (
    <div>
      <DeletePopupmessage
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        value={value}
        delete={(id)=>deleteItem(id)}
        
      />
   
    
      {/* <UpdateItemPopup
        show={modalShow}
        onHide={() => setModalShow(true)}
        onClose={()=>setModalShow(false)}
        value={value}
      /> */}
      <UpdatePopup
         show={modalShow}
         onHide={() => setModalShow(true)}
         onClose={()=>setModalShow(false)}
         value={value}
         edit={(item)=>edit(item)}
      />
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
                
                  <button className="btn btn-success" onClick={()=>setModalShowParent(item)}style={{marginRight:"20px",marginLeft:"10px"}}> Update
                    {/* <EditIcon /> */}
                  </button>
                  <button className="btn btn-danger"  onClick={()=>setDeleteModalShowParent(item)} style={{marginRight:"-20px",marginLeft:"10px"}}> Delete</button>
                
                </td>
              </tr>
            ))}
          </tbody>
        </Table> 
      </div>
    </div>
  );
};

export default Homenew;
