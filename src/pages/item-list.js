import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const formatDate = (date) => {
  var d = new Date(date);
  return d.toLocaleString();
}

const calculateDays = (d1) => {
  const dd1 = new Date(d1);
  const dd2 = new Date();
  const diffTime = Math.abs(dd1 - dd2);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays.toString(); 
}

const deleteItem = (id) => {
  axios.delete('http://localhost:5000/items/'+id)
      .then(response => { console.log(response.data)});

  window.location.reload();
}

const Item = (props) => {
  return (
    <tr>
      <td>{props.item.title}</td>
      <td>{formatDate(props.item.due)}</td>
      <td>{props.item.added_timestamp}</td>
      <td>{calculateDays(props.item.due)}</td>
      <td>
        <Link to={"/edit/"+props.item._id}>Edit</Link> | <a href="#" onClick={() => {deleteItem(props.item._id) }}>Delete</a>
      </td>
    </tr>
  )
}

function ItemList(){
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/items/")
    .then(res => {
      setItems(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[]);

  const itemList = () => {
    return items.map(item => {
      return <Item item={item} key={item._id}/>;
    })
  }

  return (
    <div>
      <h3>Countdown Items</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Due</th>
            <th>Added at</th>
            <th>Remaining days</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { itemList() }
        </tbody>
      </table>
    </div>
  )
};

export default ItemList;