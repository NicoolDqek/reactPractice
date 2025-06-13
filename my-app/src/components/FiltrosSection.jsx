import React, { useContext, useState } from 'react';
import { AppContextV } from '../context/AppContext';

function FiltrosSection() {
  const { justBrand,Categories} = useContext(AppContextV);
  const [select, setSelect] = useState([]);

  const toggleSelect = (marca) => {
    setSelect(prev =>
      prev.includes(marca)
        ? prev.filter(m => m !== marca)
        : [...prev, marca]
    );
  };

  return (
    <div className="container filtroSeccion">
      <div className='row'>
        <div className='col-11'> 
          <p>
          <a 
            className="btn w-75"
            data-toggle="collapse"
            href="#collapseMarca"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Marca
          </a>
        </p></div>
       
        <div className="col-11 collapse m-0 p-0" id="collapseMarca">
          <div className=" card w-100 p-2 m-0 card-body">
            {justBrand.map((marca, i) => (
              <label key={i} >
                <input
                  type="checkbox"
                  checked={select.includes(marca)}
                  onChange={() => toggleSelect(marca)}
                  style={{marginRight: '8px'}}
                />
                {marca}
              </label>
            ))}

             
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-11'>
          <p>
          <a
            className="btn w-75"
            data-toggle="collapse"
            href="#collapseCategory"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
           Categoria
          </a>
        </p>
        </div>
        
        <div className="collapse m-0 p-0" id="collapseCategory">
          <div className="card w-100 p-2 m-0  card-body">
            {Categories.map((categoria, i) => (
              <label key={i}>
                <input
                  type="checkbox"
                  checked={select.includes(categoria)}
                  onChange={() => toggleSelect(categoria)}
                  style={{marginRight: '8px'}}
                />
                {categoria.name}
              </label>
            ))}

             
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltrosSection;
