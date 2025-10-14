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
                username: z.string().min(2, {
                    message: "Username must be at least 2 characters.",
                }),
            })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div>
            <h1>this is a register page</h1>

            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="place your input" {...field} />
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