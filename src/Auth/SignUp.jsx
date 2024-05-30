import { useContext } from "react";
import { AuthContext } from "../Router/Provider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {

   const {createUser} = useContext(AuthContext);
     const handleSubmitSignUp = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name,email, password);

        createUser(email, password)
        .then(result =>{
         console.log(result.user);
        })
        .catch(error =>{
         console.log(error);
        })
        
     };
   return (
      <div className="hero min-h-[calc(100vh-130px)] bg-base-200">
         <div className="hero-content flex-col">
            <div className="text-center ">
               <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
               <form className="card-body" onSubmit={handleSubmitSignUp}>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input type="text" placeholder="Your Name" className="input input-bordered" required name="name" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                           Forgot password?
                        </a>
                     </label>
                  </div>
                  <div className="form-control mt-6">
                     <button className="btn btn-primary">Sign Up</button>
                  </div>
                  <div className="text-center">
                     <small>
                        Already have an account{" "}
                        <span className="text-blue-600 font-bold">
                           <Link to={"/logIn"}>SignIn</Link>
                        </span>{" "}
                     </small>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
