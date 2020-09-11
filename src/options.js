import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './options.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function Options() {
    return (
        <div>
            <h5 className='pt-2' >Options</h5>
            <label class="box">Line
            <input type="radio" checked="checked" name="radio" />
                <span class="radioo"></span>
            </label>
            <label class="box">Rectangle
                <input type="radio" name="radio" />
                <span class="radioo"></span>
            </label>
            <label class="box">Circle
        <input type="radio" name="radio" />
                <span class="radioo"></span>
            </label>
            <label class="box">Polygon
            <input type="radio" name="radio" />
                <span class="radioo"></span>
            </label>
        </div >
    )
}
export default Options;