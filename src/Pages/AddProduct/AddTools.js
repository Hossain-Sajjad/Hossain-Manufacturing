import React from 'react';
import { useForm } from "react-hook-form";

const AddTools = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        // fetch("http://localhost:5000/service", {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(d => {
        //         console.log(d)
        //     })
    }
    return (
        <div>
            <h2 className='text-center text-2xl font-semibold py-8'>Add More Tools</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/12 mx-auto">
                <input placeholder="name" {...register("name", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                <br />
                <input placeholder="description" {...register("description", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                <br />
                <input placeholder="minimum quantity" {...register("minimumQuantity", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                <br />
                <input placeholder="available quantity" {...register("availableQuantity", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                <br />
                <input placeholder="price" {...register("price", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                <br />
                <input placeholder="img" {...register("img", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Add Tools" />
            </form>
        </div>
    );
};

export default AddTools;