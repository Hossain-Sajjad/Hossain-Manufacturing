import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/userprofile?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [user])
    console.log(profile);
    const onSubmit = data => {
        data.email = user.email;
        data.name = user.displayName;
        console.log(data);
        fetch('http://localhost:5000/userprofile', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <div class="hero my-8 bg-base-200">
                <div class="hero-content">
                    <div class="max-w-md">
                        <h1 class="text-3xl font-bold text-primary">{user.displayName}</h1>
                        <p class="py-6"><strong>Email :</strong> {user.email}</p>
                        {profile[0]?.education && <p class="py-6"><strong>Education :</strong> {profile[0]?.education}</p>}
                        {profile[0]?.location && <p class="py-6"><strong>Location :</strong> {profile[0]?.location}</p>}
                        {profile[0]?.phone && <p class="py-6"><strong>Phone :</strong> {profile[0]?.phone}</p>}
                        {profile[0]?.socialLink && <p class="py-6"><strong>Social Link :</strong>{profile[0]?.socialLink}</p>}
                    </div>
                </div>
            </div>
            <div>
                <div class="hero  bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left">
                            <h1 class="text-3xl font-bold">Update Your Profile!</h1>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Education</span>
                                        </label>
                                        <input
                                            type="education"
                                            placeholder="Education"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("education")}
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Location</span>
                                        </label>
                                        <input
                                            type="location"
                                            placeholder="Location"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("location")}
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input
                                            type="phone"
                                            placeholder="Phone"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("phone")}
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Social Link</span>
                                        </label>
                                        <input
                                            type="socialLink"
                                            placeholder="Social Link"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("socialLink")}
                                        />
                                    </div>
                                    <input className='btn btn-primary w-full max-w-xs mt-8 text-white' type="submit" value="Update Profile" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;