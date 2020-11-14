import React, {useState, useEffect} from 'react';
import axios from 'axios';

function EditItem(props){
    const [title, setTitle] = useState("");
    const [due, setDue] = useState("");
    const {id} = props.match.params;

    useEffect(() => {
        axios.get("http://localhost:5000/items/"+id)
        .then(res => {
            setTitle(res.data.title);
            setDue(res.data.due);
        })
        .catch((error) => {
          console.log(error);
        })
      },[]);

    const changeTitle = (e) => {
      setTitle(e.target.value);
    };

    const changeDue = (e) => {
      setDue(e.target.value);
    };

    const submit = (e) => {
      e.preventDefault();
      const newItem = {title, due};
      console.log(newItem);
      axios.post('http://localhost:5000/items/update/'+id, newItem)
      .then(res => console.log(res.data));

      window.location.reload();
    }

    return (
      <div>
        <h3>Edit Countdown Item</h3>
        <form onSubmit={(e) => submit(e)}>
          <div className="form-group"> 
            <label>Title: </label>
            <input
                type="text"
                required
                className="form-control"
                value = {title}
                onChange={(e) => changeTitle(e)}>
            </input>
          </div>
          <div className="form-group"> 
            <label>Due date: </label>
            <input  type="datetime-local"
                required
                className="form-control"
                value = {due}
                onChange={(e) => changeDue(e)}
                />
          </div>
         

          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
}

export default EditItem;