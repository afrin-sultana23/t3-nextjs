import React from 'react';
import {useForm} from "react-hook-form";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "~/components/ui/form";
import {Input} from "~/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const Page = () => {
    const form = useForm(
    )

    const formSchema = z.object({

    })
    return (
        <div>
            <h1>this is a LOGIN page</h1>

            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="place your email" {...field} />
                        </FormControl>
                        <FormDescription>This is your public display name.</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default Page;