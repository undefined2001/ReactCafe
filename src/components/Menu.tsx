import React from "react";
import data from '../db/dummydata'

export default function Menu() {

    function render_items(data) {
        return (
            data.map((item, index) => (
                <div className="mt-3 rounded-md w-full border flex flex-row-reverse justify-between">
                    <div className="w-full grid">
                        <div className="justify-self-center self-center">
                            <h1 className="font-mono">{item.name}</h1>
                            <h3 className="font-mono"> Price: {item.price} TK</h3>
                        </div>
                    </div>
                    <img className="rounded-md w-40" src={item.path} alt="" />
                </div>
            ))
        )
    }

    return (
        <div className=" mt-2 flex flex-row">
            <div className="w-1/3 mx-2">
                {render_items(data)}
            </div>
            <div className="w-1/3 mx-2">
                {render_items(data)}
            </div>
            <div className="w-1/3 mx-2">
                {render_items(data)}
            </div>

        </div>
    )
}