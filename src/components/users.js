import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';



function Users() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");


    function getData(){
        axios
        .get(`https://6481f66529fa1c5c50326158.mockapi.io/ems?q=${query}`)
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        });

    }
    useEffect(() => {
      if (query.length === 0 || query.length > 2) getData();
    }, [query]);

    function setToLocal(id,name,category,description,statuss){
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("category",category);
        localStorage.setItem("description",description);
        localStorage.setItem("statuss",statuss);

    } 

    function deleteHandler(id){
        axios.delete(`https://6481f66529fa1c5c50326158.mockapi.io/ems/${id}`
        )
        .then(()=>{
        getData()
        })
    }
    
     
    return (
      <div>
        <div className="container">
          <div className="py-4"></div>
          <h1>Members</h1>
  
          <Link className="btn btn-outline" to="/Create">
            <i class="bi bi-plus-lg"></i>Add New{" "}
          </Link>
          
          <input  //search bar
          type="text"
          placeholder="search..."
          className="search"
          onChange={(e)=>setQuery(e.target.value)}
          />

        <table data
            class="table border shadow table-hover table-dark
              table-bordered"
           >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th> Action </th>
              </tr>
            </thead>
            
            {data.map((row) => {
                return(
               <tbody>
                <tr>
                  <th scope="row">{row.id}</th>
                            <td>{row.name}</td>
                            <td>{row.category}</td>
                            <td>{row.description}</td>
                            <td>{row.statuss}</td>
                  <td>
                    <Link
                      className="btn btn-outline-light"
                      to="/update"><i class="bi bi-pencil-fill" onClick={()=>setToLocal(row.id,row.name,row.category,row.description,row.statuss)}></i>
                    </Link>
                    <Link 
                      className="btn btn-outline-light  mr-2"
                      onClick={()=> deleteHandler(row.id)}>
                      <i class="bi bi-trash"></i>
                    </Link>
                  </td>
                </tr>
              </tbody>
            )})}
          </table>
        </div>
      </div>
    )
}

export default Users