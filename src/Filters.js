import React from 'react';
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Filters.css';

function Filters() {
    return (
        <div>
            <h5>Filters</h5>
              <label className="containerr">Roads
                <input type="checkbox" checked="checked" />
                <span className="checkmark"></span>
              </label>
              <label className="containerr">Address Points
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="containerr">Roads
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="containerr">Address Points
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
        </div>
    )
}
export default Filters;