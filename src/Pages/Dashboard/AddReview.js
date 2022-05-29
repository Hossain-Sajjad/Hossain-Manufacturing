import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user, loading] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);
        if (data.ratings < 1 || data.ratings > 5) {
            toast.error('Ratings have to be between 1 to 5')
        }
        else {
            data.name = user.displayName;
            fetch("http://localhost:5000/review", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(d => {
                    console.log(d)
                })
            toast.success('Review added successfully.')
        }
    }
    return (
        <div className='flex justify-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="description"
                                placeholder="Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input
                                type="ratings"
                                placeholder="Ratings"
                                className="input input-bordered w-full max-w-xs"
                                {...register("ratings", {
                                    required: {
                                        value: true,
                                        message: 'Ratings is Required'
                                    },
                                    minValue: {
                                        value: 1,
                                        message: 'Must be 1 or longer'
                                    },
                                    maxValue: {
                                        value: 5,
                                        message: 'Must be 5 characters or lower'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.ratings?.type === 'maxValue' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Add Review" />
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div >
    );
};

export default AddReview;