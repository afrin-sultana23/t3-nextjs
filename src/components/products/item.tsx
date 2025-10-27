import React from 'react';
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";


const Item = () => {

    const items = [
        {
        'id' : 1,
        'name' : "Beef",
        },
        {
            'id' : 2,
            'name' : "Chicken",
        },
        {
            'id' : 3,
            'name' : "meat",
        },
    ]
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title: {items.map(item => <p>item.id</p>)}</CardTitle>
                    <CardDescription>Food section
                    </CardDescription>
                    <CardAction>Add to cart</CardAction>
                </CardHeader>
                <CardContent>
                    <p>Price:$</p>
                </CardContent>
                <div><p>-------------</p></div>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Item;