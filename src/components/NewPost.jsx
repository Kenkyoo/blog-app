import { useForm } from "react-hook-form"
import {DataContext} from "../UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function NewPost() {

  const notify = () => toast('El Post ha sido creado con exito !');
  const userData = useContext(DataContext);
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      updated_at: new Date().toISOString().split("T")[0],
      user: {
        id: userData.id || "", // Si Auth0 proporciona un ID, agrégalo
        username: userData.name || "",
        email: userData.email || "",
        profile_pic: userData.picture || "",
      },
    },
  })

  const onSubmit = (data) => {

    axios.post("https://server-blog-kg8b.onrender.com/api/addPosts", data) // Enviar `data` directamente
    .then((response) => {
      console.log("Post creado con éxito:", response.data);
      navigate("/posts"); // Redirigir después de la creación
    })
    .catch((error) => {
      console.error("Error al crear el post:", error);
    });

  fetch('https://json-server-9jy4.onrender.com/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(() => {
      // Handle the response data here
      console.log("Post creado con éxito");
      navigate("/posts");
    })
    .catch(error => {
      // Handle any errors
      console.log(error)
  });
}
  return (
    <form className="bg-base" onSubmit={handleSubmit(onSubmit)}>

<div className="bg-base py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="relative px-4 py-10 bg-base mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <div className="max-w-md mx-auto">
        <div className="flex items-center space-x-5">
          <div className="h-14 w-14 bg-accent rounded-full flex flex-shrink-0 justify-center items-center text-base text-2xl font-mono">
            i
          </div>
          <div className="block pl-2 font-semibold text-xl self-start text-base">
            <h2 className="leading-relaxed text-primary">New Post</h2>
            <p className="text-sm text-secondary font-normal leading-relaxed">
              create a new post then press create button
            </p>
          </div>
        </div>
        <div>
          <div className="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
            <div className="flex flex-col">
              <input type="text" placeholder="Title Post" className="input input-bordered w-full max-w-xs mx-auto" {...register("title")} required/>
            </div>
            <div className="flex flex-col">
              <input type="date" className="input input-bordered w-full max-w-xs mx-auto" {...register("updated_at")} readOnly/>
            </div>
            <div className="flex flex-col">
                <input type="text" placeholder="Subtitle Post" className="input input-bordered w-full max-w-xs mx-auto" {...register("subtitle")} required/>
            </div>
            <div className="flex flex-col">
              <div className="tooltip" data-tip="Selecciona una categoria relacionada con tu post">
              <select className="select select-bordered w-full max-w-xs mx-auto" {...register("category")} required>
                <option disabled selected>Post Category</option>
                <option value="technology">Technology</option>
                <option value="sports">Sports</option>
                <option value="politics">Politics</option>
                <option value="entertainment">Entertainment</option>
                <option value="science">Science</option>
                <option value="health">Health</option>
              </select>
              </div>
            </div>
            <div className="flex flex-col">
                <input type="text" placeholder="Link image (Optional)" className="input input-bordered w-full max-w-xs mx-auto" {...register("featured_image")}/>
            </div>
            <div className="flex flex-col">
                <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs mx-auto" placeholder="Post Content" {...register("main_content")} required></textarea>
            </div>
          </div>
          <div className="divider">x</div>
          <div className="flex justify-around items-center">
            <button className="btn btn-square bg-accent">
              <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="tooltip" data-tip="Al crear el post, seras reedirigido a la pestaña principal en donde encontraras tu post creado">
              <button onClick={notify} type="submit" className="btn btn-primary">
                Crear
              </button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<ToastContainer />
</form>
  )
}