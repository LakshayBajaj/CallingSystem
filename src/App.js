import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faCompress, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './Filters';
import Filters from './Filters.js';
import Options from './options.js';
import Agenices from './agenices.js';


function App() {
  return (
    <div className="container-fluid">

              {/* Bradnig row */}
              <div className="row brand">
                <div className="col-3">
                  Branding
                </div>
              </div>

            {/* Rest of the components */}
          <div className="row">

                {/* Left Tab */}
                <div className="col-3 pr-4">
                  <div className="pt-5 pb-3 row centerr">
                    <span className='textt mr-5'>Latitude</span> <input type="text" class="form-control w-50 input" aria-label="Latitude"></input>
                  </div>
                  <div className="row centerr pb-4">
                    <span className='textt mr-4'>Longitude</span> <input type="text" class="form-control ml-2 w-50 input" aria-label="Latitude"></input>
                  </div>
                  <div className="row centerr pb-4">
                    OR
                  </div>
                  <div className="row centerr align-text-bottom">
                    <div className='col-6'><span className='textt' >Address/Location</span> </div> <div className='pl-0 col-6' ><input type="text" className="form-control input" aria-label="Address"></input></div>
                  </div>
                  <div className="row justify-content-end pr-3 mt-3">
                    <button type="button" class="btn pt-2 pb-2 pl-3 pr-3 btn-soft">Submit</button>
                  </div>
                  <br />
                  <div className="row centerr align-text-bottom">
                    <div className='col-6 text-center'><span className='textt'>Delete Time</span> </div> <div className='pl-0 col-6' ><input type="text" className="form-control input" aria-label="Address"></input></div>
                  </div>
                  <div className="row justify-content-end pr-3 mt-3">
                    <button type="button" class="btn pt-2 pb-2 pl-3 pr-3 btn-soft">Submit</button>
                  </div>
                  <br />
                  <div className="row centerr">
                    <span className='textt'>Zoom History Control</span>
                  </div>
                  <div className="row centerr mt-2">
                    <button type="button" class="pt-2 pb-2 mr-4 pl-4 pr-4 btn btn-soft"><FontAwesomeIcon className='mr-2' icon={faAngleLeft} /> Back</button>
                    <button type="button" class="pt-2 pb-2 btn btn-soft">Forward <FontAwesomeIcon className='ml-2' icon={faAngleRight} /> </button>
                  </div>
                  <br />
                  <div className="row centerr">
                    <span className='textt'>Pan History Control</span>
                  </div>
                  <div className="row centerr mt-2">
                    <button type="button" class="pt-2 pb-2 mr-4 pl-4 pr-4 btn btn-soft"><FontAwesomeIcon className='mr-2' icon={faAngleLeft} /> Back</button>
                    <button type="button" class="pt-2 pb-2 btn btn-soft">Forward <FontAwesomeIcon className='ml-2' icon={faAngleRight} /> </button>
                  </div>    
            </div>

            {/* Center + right tab + location identifier */}
            <div className="col-9">

              {/* Location Identifier */}
              <div className="row pl-4 pt-2 location">
                <p>Phoenix, Arizona</p> <FontAwesomeIcon className='ml-3 fa-lg mr-3' icon={faAngleRight} /> <p>85023</p>
              </div>


              <div className="row">

                {/* Map */}
                <div className="col-8 map"></div>

                {/* Right tab */}
                <div className="col-4 pl-4">
                  <div className="row justify-content-center mb-3">
                    <button type="button" className="pt-2 pb-2 pl-4 pr-4 btn btn-soft"><FontAwesomeIcon className='mr-2' icon={faCompress} /> Default Zoom Level</button>
                  </div>


                  <div className="row justify-content-center mb-3">
                    <button type="button" class=" pt-2 pb-2 pl-4 pr-4 btn btn-soft"><FontAwesomeIcon className='mr-2 ' icon={faMapMarkerAlt} /> Current Location</button>
                  </div>
                  <Agenices />
                  <br />
                  <Filters />


                  <div className="justify-content-start row ml-1 mb-3">
                    <button type="button" className="mt-1 pl-3 pr-3 btn btn-soft">Submit</button>
                  </div>

                  <h5 className='mt-2 mb-2'>Drawing Interface</h5>
                  <div className="justify-content-center row pt-1 mb-2">
                    <button type="button" class="mr-4 pt-2 pb-2 pl-3 pr-3 btn btn-soft">Enable</button>
                    <button type="button" class=" pt-2 pb-2 pl-4 pr-3 btn btn-soft">Disable </button>
                  </div>
                  <Options />
                </div>
              </div>
            </div>

          </div>
    </div >
  );
}

export default App;
