import React, { useState } from "react";
import { Formik } from "formik";
import { LoginUsesCases } from "../../../application/use-cases/login.use.cases";
import { LoginApi } from "../../../insfrastructure/Login-api";
import * as Yup from "yup";
import { useNavigate } from "react-router";

const LoginPage =  () => {
  const navigate = useNavigate();
  const [messageResponse , setMessageResponse ] = useState<string>("");
  const login=async(email : string, password: string) => {
    email = 'emilys';
    const useCases = new LoginUsesCases(new LoginApi());
    const response = await  useCases.login(email,password);
    if (response.status === 200) {
      if ("response" in response) {
        setMessageResponse("Login successful");
        localStorage.setItem("token", response.response.accessToken);
        localStorage.setItem("user", response.response.username);
        localStorage.setItem("image", response.response.image);
        navigate("/home");
      }
    } else {
      setMessageResponse("Login failed");
    }
    console.log(response);
  };
   const validateYup = Yup.object().shape({
    email: Yup.string().email("Email Invalido").required("Requerido"),
    password: Yup.string().required("Requerido").max(12,"Maximo 12 caracteres").min(4,"Minimo 4 Caracteres"),
   });
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Formik
        initialValues={{ email: "", password: "" }}
        
      validationSchema={validateYup}
        onSubmit={(values, { setSubmitting }) => {
          login(values.email, values.password);
          
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
              onSubmit={handleSubmit}
              className="max-w-sm mx-auto p-4 bg-white rounded-md shadow-md"
            >
              <h1 className="text-3xl font-bold mb-4">Ingrese sus credenciales</h1>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>

                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </div>
              <button
                className="w-full px-3 py-2 text-white bg-blue-500 rounded-md"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <div className="mt-4" >
                {messageResponse && (
                  <p className="mt-4 text-yellow-500 text-center" >{messageResponse}</p>
                )}
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
