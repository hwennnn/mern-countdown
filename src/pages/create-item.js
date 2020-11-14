import React, {useState} from 'react';
import axios from 'axios';

function CreateItem(){
    const [title, setTitle] = useState("");
    const [due, setDue] = useState("");

    const changeTitle = (e) => {
      setTitle(e.target.value);
    };

    const changeDue = (e) => {
      setDue(e.target.value);
    };

    const submit = (e) => {
      e.preventDefault();
      const newItem = {title, due};
      axios.post('http://localhost:5000/items/add', newItem)
      .then(res => console.log(res.data));

      window.location.reload();
    }

    return (
      <div>
        <h3>Create New Countdown Item</h3>
        <form onSubmit={(e) => submit(e)}>
          <div className="form-group"> 
            <label>Title: </label>
            <input
                type="text"
                required
                className="form-control"
                onChange={(e) => changeTitle(e)}>
            </input>
          </div>
          <div className="form-group"> 
            <label>Due date: </label>
            <input  type="datetime-local"
                required
                className="form-control"
                onChange={(e) => changeDue(e)}
                />
          </div>
         

          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
}

export default CreateItem;