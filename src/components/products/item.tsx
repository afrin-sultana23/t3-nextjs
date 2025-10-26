import React from 'react';
import {Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {Alert} from "~/components/ui/alert";
import {BadgeAlert} from "lucide-react";

const Item = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
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