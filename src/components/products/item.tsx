import React from 'react';
import {Card, CardAction, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Alert} from "~/components/ui/alert";
import {BadgeAlert} from "lucide-react";

const Item = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <Alert>
                        <BadgeAlert/>
                    </Alert>
                    <CardTitle>
                        <img alt=""/>
                    </CardTitle>
                    <CardDescription>Shoes</CardDescription>
                    <CardAction></CardAction>

                </CardHeader>
            </Card>
        </div>
    );
};

export default Item;