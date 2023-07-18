import React from "react";
export default function About() {
    return (
        <div className="w-full h-4/5 flex justify-evenly mt-10">
            <div className="w-1/2 grid">
                <p className="font-mono text-2xl justify-self-center text-white self-center">
                    We Are a Cloud Kitchen service.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui fugit perspiciatis ipsam excepturi doloribus! Recusandae error repellendus praesentium ipsa quo, autem, mollitia odit qui labore fuga asperiores, saepe porro delectus id! Reprehenderit, vitae debitis totam id impedit beatae veritatis quisquam necessitatibus earum vel minima molestiae. Cupiditate molestias reprehenderit omnis tempore optio nemo   
                </p>
            </div>
            <img className="text-orange-300 w-1/3 self-center" src="/images/chef.png" alt="" />
        </div>
    )
}