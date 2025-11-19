import React from 'react';
import Link from "next/link";

const Topbar = () => {
    return (
        <div>
            <div className="max-w-5xl flex justify-between mx-auto p-3 bg-blue-800 text-md tracking-widest text-amber-50">
                <div>
                    <p className="text-amber-50">50%  discount for ordering $99</p>
                </div>
                <div>
                    <li>
                        <Link href={"#"}>Best deals</Link>
                        <Link href={"#"}>Help & Contact</Link>
                    </li>

                </div>
            </div>


        </div>
    );
};

export default Topbar;