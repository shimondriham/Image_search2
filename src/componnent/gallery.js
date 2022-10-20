import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Gallery(props){
  let [ar,setAr] = useState([]); 
  let params = useParams();
  let searchRef = useRef();
  let nav = useNavigate()

  useEffect(() => {
    doApi()
  },[params.search])

  const doApi = async() => {
    let searchQ = params.search;
    console.log(searchQ)
    let url = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${searchQ}&image_type=photo&pretty=true`
    let resp = await axios.get(url);
    console.log(resp.data);
    setAr(resp.data.hits);
  }

  const onSearchClick = () => {
    let search_val = searchRef.current.value;
    nav("/gallery/"+search_val);
  }

  return(
    <div className='container'>
      <h1>Gallery page</h1>
      <div class="border my-3 p-2">
        <div className="col-md-6 d-flex">
          <input ref={searchRef} className='form-control'/>
          <button onClick={onSearchClick} className='btn btn-dark'>Search</button>
        </div>
      </div>
      <div className="row">
        {ar.map(item => {
          return(
          <img key={item.id} className='col-md-3' src={item.previewURL} alt={item.tags}/>
          )
        })}
      </div>
    </div> 
  )
}

export default Gallery