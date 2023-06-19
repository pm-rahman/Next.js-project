"use client";

import useAuth from "@/hooks/useAuth";
import createJWT from "@/utils/createJWT";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignupForm = () => {
    const { createUser, profileUpdate, googleLogin } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();

    const search = useSearchParams();
    const {replace} = useRouter();
    const from = search.get('redirectUrl')||'/';

    const onSubmit = async (data) => {
        const { name, email, password, photo } = data;
        const toastId = toast.loading('Loading...')
        try {
            const user = await createUser(email, password);
            await createJWT({ email });
            await profileUpdate({
                displayName: name,
                photoURL: photo,
            });
            toast.dismiss(toastId);
            replace(from);
            toast.success('User signed in successfully');

        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || 'User not Signed in')
        }
    }
    const handleGoogleLogin = async () => {
        const toastId = toast.loading('Loading...');
        try {
            const { user } = await googleLogin();
            await createJWT({ email: user.email });
            toast.dismiss(toastId);
            replace(from);
            toast.success('User Signed in successfully')
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || 'User not Signed in')
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label htmlFor="name" className="label label-text">
                    Name
                </label>
                <input
                    type="text"
                    placeholder="name"
                    id="name"
                    name="name"
                    className="input input-bordered "
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter your name.
                    </span>
                )}
            </div>
            <div className="form-control">
                <label htmlFor="email" className="label label-text">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    className="input input-bordered "
                    autoComplete="email"
                    {...register("email", {
                        required: true,
                        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                    })}
                />
                {errors.email && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter a valid email address.
                    </span>
                )}
            </div>
            <div className="form-control">
                <label htmlFor="password" className="label label-text">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    name="password"
                    className="input input-bordered "
                    autoComplete="new-password"
                    {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter a password.
                    </span>
                )}
            </div>
            <div className="form-control">
                <label htmlFor="confirmPassword" className="label label-text">
                    Confirm Password
                </label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="input input-bordered "
                    autoComplete="new-password"
                    {...register("confirmPassword", {
                        required: true,
                        minLength: 6,
                        validate: (value) =>
                            value === getValues('password') || "The passwords do not match.",
                    })}
                />
                {errors.confirmPassword && (
                    <span className="text-red-500 text-base mt-1">
                        {errors.confirmPassword.message || "Please confirm your password."}
                    </span>
                )}
            </div>
            <div className="form-control">
                <label htmlFor="photo" className="label label-text">
                    Photo
                </label>
                <input
                    id="photo"
                    type="url"
                    placeholder="photoURL"
                    className="input input-bordered "
                    name="photo"
                    {...register("photo", { required: true })}
                />
                {errors.photo && (
                    <span className="text-red-500 text-base mt-1">
                        {errors.confirmPassword.message || "Please enter your photo URl."}
                    </span>
                )}
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                    Sign Up
                </button>
            </div>
            <p className="mt-3">
                Already have an account?{" "}
                <Link className="text-blue-500 underline ml-1" href="/login">
                    Login
                </Link>
            </p>
            <div className="divider mt-5">OR</div>
            <button
                onClick={handleGoogleLogin}
                type="button"
                className="btn btn-primary mt-5 mx-auto"
            >
                <FcGoogle className="text-3xl mr-3" /> Continue with google
            </button>
        </form>
    );
};

export default SignupForm;