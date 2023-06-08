import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    
    const [name,setName] = useState("");
    const [category,setCategory] = useState("");
    const [description,setDescription] = useState("");
    const [statuss,setStatus] = useState("");
    const history = useNavigate();
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('click');
        axios
        .post('https://6481f66529fa1c5c50326158.mockapi.io/ems',
        {
            name: name,
            category: category,
            description: description,
            statuss: statuss
        })
        history("/");
    }

    return (
        <div className='create'>
            <h2>Create New User</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control"
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input 
                    type="text" 
                    className="form-control"
                    onChange={(e)=>setCategory(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input 
                    type="text" 
                    className="form-control"
                    onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <input 
                    type="text" 
                    className="form-control"
                    onChange={(e)=>setStatus(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default Create