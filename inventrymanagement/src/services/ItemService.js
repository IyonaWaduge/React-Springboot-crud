 import axios from "axios";
 const ITEM_REST_API_URL="http://localhost:8080/api/item";

 class ItemService{
    getAllItems(){
        return axios.get(ITEM_REST_API_URL);

    }
    saveItems(item){
        return axios.post(ITEM_REST_API_URL,item);
    }
    getItemById(itemId){
        console.log(ITEM_REST_API_URL +'/'+ itemId);
        return axios.get(ITEM_REST_API_URL +'/'+ itemId);
    }
    editItem(itemId,item){
        return axios.put(ITEM_REST_API_URL +'/'+ itemId,item);
    }
    deleteItem(itemId){
        return axios.delete(ITEM_REST_API_URL +'/'+ itemId);
    }
 }
 export default  new ItemService( );