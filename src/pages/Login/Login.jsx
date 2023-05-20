import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/login/login.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () =>
{

    const {signIn}=useContext(AuthContext);
    const handleLogin = event =>
    {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        // const password = form.password.value;

        console.log(email, password)
        signIn(email,password)
        .then(result =>{
            const user =result.user;
            console.log(user);

        })
        .catch(error =>console.log(error));

    }
    return (
        <div className='flex'>
            <div className='text-center lg:text-left w-1/2 '>
                <img className='w-full h-full' src={logo2} alt="" />
            </div>
            <div className="min-h-screen bg-gray-800 flex flex-col justify-center sm:py-12 w-1/2">
                <div className="p-10 xs:p-0 mx-auto md:w-full mt-4 md:max-w-md">
                    <h1 className="font-bold text-center text-3xl mb-5 text-white">Login</h1>
                    <div className="bg-gray-100 shadow w-full rounded-lg divide-y divide-gray-300">
                        <form onSubmit={handleLogin} className="px-5 py-7" action="#" method="POST">
                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Email</label>
                            <input type="email" name="email" className="border-2 border-indigo-500 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-success-500" placeholder="Email" required />

                            <label className="font-semibold text-sm text-gray-700 pb-1 block">Password</label>
                            <input type="password" name="password" className="border-2 border-indigo-500 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-indigo-500" placeholder="Password" required />





                            <button type="submit" className="transition duration-200 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-lg text-white font-bold py-2 px-4 rounded-lg w-full">
                                LOGIN
                            </button>
                        </form>
                        <p className='text-center p-4'>New to Wonder World Toy <Link className='text-orange-600 font-bold' to='/signup'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;