import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Update() {
    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [category,setCategory] = useState("");
    const [description,setDescription] = useState("");
    const [statuss,setStatus] = useState("");
    

    const back = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setCategory(localStorage.getItem("category"));
        setDescription(localStorage.getItem("description"));
        setStatus(localStorage.getItem("status"));
        
    },[])

    function editHandler(e) {
        e.preventDefault();
        axios.put(`https://6481f66529fa1c5c50326158.mockapi.io/ems/${id}`,{
            name: name,
            category: category,
            description: description,
            statuss: statuss
        })
        .then(()=>{ back('/') })
        
    }
    return (
        <div className='update'>
            <h2>Edit User</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value={statuss}
                    onChange={(e)=>setStatus(e.target.value)}
                    />
                </div>
        
                <button type="submit" className="btn btn-primary" 
                onClick={editHandler}
                >Edit</button>
            </form>
        </div>
    )
}

export default Update