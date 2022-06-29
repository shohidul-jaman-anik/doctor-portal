import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('service', () => fetch('https://afternoon-mesa-24247.herokuapp.com/service').then(res => res.json()))

    const imgStoragekey = 'eb7029e2c67ae133bd4c4ba548af171d'


    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgStoragekey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        about: data.about,
                        img: img
                    }
                    // send to your database 
                    fetch('https://afternoon-mesa-24247.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log("ahaaa", inserted)
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the doctor');
                            }
                        })

                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div >
            <h1 className='text-2xl'>Add a doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">

                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Doctor Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="email"
                        placeholder="Doctor Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs mb-5">
                    <select {...register('specialty')} class="select input-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <textarea
                        type="text"
                        placeholder="About"
                        className="input input-bordered w-full max-w-xs h-32"
                        {...register("about", {
                            required: {
                                value: true,
                                message: 'About is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.about?.type === 'required' && <span className="label-text-alt text-red-500">{errors.about.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;






