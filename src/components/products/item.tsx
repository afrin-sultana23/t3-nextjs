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
                    <CardDescription>Toys
                    </CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Item;