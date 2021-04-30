import React, { Component } from 'react'


class List extends Component {

    render(props) {
        return (
            <div>
                <ul style={{ listStyle: 'none' }}>
                    {this.props.myliste.map((x) =>
                        <li>
                            <div className="box col-4 text-light"
                                style={{ border: 'solid' }} > {(x.name)}
                                <span style={{ float: 'right', backgrounColor: 'red' }}>
                                    {(x.price)}
                                </span>
                            </div>
                        </li>)}
                </ul>
                {/* <button>sup</button> */}
            </div>
        )
    }
}
export default List;