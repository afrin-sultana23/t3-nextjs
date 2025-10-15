"use client"
import { type SubmitHandler, useForm} from "react-hook-form";
// import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "~/components/ui/form";
// import {Input} from "~/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"


type Inputs = {
    username: string
    password: any
}

const Page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <div>
            <h1>this is a register page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input type="text" placeholder="username" {...register("username")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input type="password" placeholder="password" {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}

                <input type="submit" />
            </form>


        </div>
    );
};

export default Page;