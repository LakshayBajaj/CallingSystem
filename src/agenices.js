import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './options.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function Agenices() {
    return (
        <div>
            <div className="row justify-content-center pt-1 mb-3 mx-auto ">
                <button type="button" aria-pressed="true" className="active pl-3 pr-3 pt-2 pb-2 btn btn-soft"><b>Show Agencies</b></button>
            </div>
            <label className="box">Caller Location
            <input type="radio" checked="checked" name="agency" />
                <span className="radioo"></span>
            </label>
            <label className="box">Emergency Location
                <input type="radio" name="agency" />
                <span className="radioo"></span>
            </label>
        </div >
    )
}
export default Agenices;