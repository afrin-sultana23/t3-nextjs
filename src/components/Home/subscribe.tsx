import React, {useState} from 'react';

const Subscribe = () => {

    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const handleSubmit = () => {
        e.preventDefault();
    }

    return (
        <div className="my-16 ">
            <div className="flex mx-auto container p-14 bg-purple-200 h-[22rem] rounded-lg max-w-4xl">
                <div className=' h-1/2'>
                    <h1 className="heading mt-5">Subscribe to our Newsletter</h1>
                    <p className="text-gray-500 text-lg font-medium ml-20 pb-4">Take your career to unique heights!!</p>


                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex">
                            <label className="relative flex-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-bordered w-full rounded-r-none"
                                    placeholder="Enter your email"
                                    required
                                />
                            </label>
                            <button
                                type="submit"
                                className="btn bg-[#C298F6] border-none tracking-wider rounded-l-none hover:bg-[#b17ee9]">
                                <FaTelegramPlane className="w-5 h-5" />

                            </button>
                        </div>

                        {status === 'success' && (
                            <p className="text-black text-sm">Successfully subscribed!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                        )}
                    </form>


                </div>
                <div className="w-1/3 mr-10">
                    {/*<Lottie*/}
                    {/*    options={defaultOptions}*/}
                    {/*    height={300}*/}
                    {/*    width={300}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    );
};

export default Subscribe;