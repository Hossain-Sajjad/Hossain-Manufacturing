import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const PurchaseTools = () => {
    const [user] = useAuthState(auth);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams();
    const [tool, setTool] = useState('');
    useEffect(() => {
        const url = `https://arcane-waters-84543.herokuapp.com/tool/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
    // console.log(user)
    const onSubmit = data => {
        const quantity = parseInt(data.quantity)
        if (quantity < tool.minimumQuantity || quantity > tool.availableQuantity) {
            toast.error("Order quantity can't be greater than available quantity or lesser than minimum quantity");
        }
        else {
            const purchasedData = {
                email: user.email,
                productName: tool.name,
                productId: tool._id,
                address: data.address,
                phoneNumber: data.number,
                quantity: data.quantity
            }
            fetch('https://arcane-waters-84543.herokuapp.com/purchase', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(purchasedData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast('Thanks for your order')
                    }
                    else {
                        toast.error('You already have a order of this product.')
                    }
                });
            reset();
        }
    }

    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-16'>
            <div class="card lg:max-w-screen-lg lg:w-96 bg-base-100 shadow-xl lg:ml-32">
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
                <form onSubmit={handleSubmit(onSubmit)} className="ml-20">
                    <input placeholder="name" value={user?.displayName} {...register("name", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <br />
                    <input placeholder="address" {...register("address", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <br />
                    <input placeholder="number" {...register("number", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <br />
                    <input type="number" defaultValue={tool.minimumQuantity} placeholder="quantity" {...register("quantity", { required: true })} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Purchase" />
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default PurchaseTools;