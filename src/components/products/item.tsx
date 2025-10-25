import React from 'react';
import {Card, CardAction, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";

const Item = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <img/>
                    </CardTitle>
                    <CardDescription>Shoes</CardDescription>
                    <CardAction></CardAction>

                </CardHeader>
            </Card>
        </div>
    );
};

export default Item;