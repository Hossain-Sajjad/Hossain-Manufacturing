import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const PurchaseTools = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams();
    const [tool, setTool] = useState('');
    useEffect(() => {
        const url = `http://localhost:5000/tool/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])

    const onSubmit = data => {
        const quantity = parseInt(data.quantity)
        if (quantity < tool.minimumQuantity || quantity > tool.availableQuantity) {
            toast.error("Order quantity can't be greater than available quantity or lesser than minimum quantity");
        }
        else {
            console.log(data);
        }
    }

    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-0 mt-16'>
            <div class="card lg:max-w-screen-lg w-96 bg-base-100 shadow-xl ml-32">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{tool.name}</h2>
                    <figure class="px-10 pt-3">
                        <img src={tool.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <p>{tool.description}</p>
                    <p>Minimum Quantity: {tool.minimumQuantity}</p>
                    <p>Available Quantity: {tool.availableQuantity}</p>
                    <p>Price Per Unit {tool.price}$</p>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <input placeholder="name" value={user?.displayName} {...register("name", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <br />
                    <input placeholder="address" {...register("address", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <br />
                    <input placeholder="number" {...register("number", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <br />
                    <input placeholder="quantity" {...register("quantity", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Add Tools" />
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default PurchaseTools;