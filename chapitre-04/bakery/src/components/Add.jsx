
import React from 'react';

class Add extends React.Component {

    render() {

        return (

            <div className="childAdd">

                <div className="row mx-5 my-1 ">

                    <div className="col mb-3 ">
                        <div className="btn-toolbar pull-left mx-0">
                            <button type="button" className="btn btn-outline-warning btn mr-3 ">Add</button>
                            <button type="button" className="btn btn-outline-primary btn mr-3">List</button>
                            <button type="button" className="btn btn-outline-success btn mr-3">Pay</button>
                        </div>
                    </div>

                    <div className="input-group mb-3 mx-3">
                        <input type="text" class="form-control" placeholder="Selection" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary onHov text-sm" type="button">Button</button>
                        </div>
                    </div>

                    <div className="input-group mb-3 mx-3">
                        <label for="disabledRange" class="form-label text-white">Prix</label>
                        <input type="range" className="form-range" min="0" max="10" step="1" id="customRange" />
                    </div>

                </div>
            </div>
        );
    }
}

export default Add