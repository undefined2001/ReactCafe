import React from "react";
export default function Contact() {
    return (
        <div className="h-4/5 flex justify-evenly mt-10">
            <div className="w-1/2 h-4/5 flex flex-col rounded-md justify-evenly items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.089468317874!2d90.40307877598028!3d23.77982818764465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7dfd39056c9%3A0xaf5c30df5df5d737!2sSwitch%20Kitchen!5e0!3m2!1sen!2sbd!4v1689666509250!5m2!1sen!2sbd"
                    width="530"
                    height="350"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                    className="rounded-md"
                />
                <h1 className="h-1/2 w-11/12 p-2 grid content-center ml-10 mt-10 mr-10 font-mono text-2xl bg-orange-400 rounded-md">
                    OUR LOCATION IS:<br/><br/> GP JA/141, 20 NO COMMISSIONER ROAD, WIRELESS GATE, MOTHAKHALI, DHAKA-1212
                </h1>
            </div>
            <div className="w-1/2 grid bg-orange-400 rounded-md">
                <h1 className="self-center justify-self-center text-4xl">Contact<br/><br/>
                PHONE-1: 017XXXXXXXX
                <br/><br/>
                PHONE-2: 019XXXXXXXX
                </h1>
            </div>
        </div>
    )
}