import React from 'react';
import Link from "next/link";

const Topbar = () => {
    return (
        <div className="w-full mx-auto  bg-blue-800">
            <div className=" w-4/5 mx-auto flex justify-between p-2  text-sm font-semibold tracking-wider text-gray-300">
                <div>
                    <p className=""> ⋆·˚ ༘ * 50%  discount for ordering $99 ⋆·˚ ༘ *</p>
                </div>
                <div className="flex gap-4 underline">

                        <Link href={"#"}>Best deals</Link>
                        <Link href={"#"}>Help & Contact</Link>

                </div>
            </div>


        </div>
    );
};

export default Topbar;