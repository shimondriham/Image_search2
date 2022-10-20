import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    let searchRef = useRef();
    let nav = useNavigate()

    const onSearchClick = () => {
        let search_val = searchRef.current.value;
        nav("/gallery/"+search_val);
      }

  return (
    <div className='container text-center' style={{height:620}} >
        <h1>shearch Gallery page</h1>
    <div class="border my-3 p-2 col-4 mx-auto">
      <div className="col-md-11 d-flex">
        <input ref={searchRef} className='form-control'/>
        <button onClick={onSearchClick} className='btn btn-dark'>Search</button>
      </div>
    </div>
 
  </div> 
  )
}

export default Home