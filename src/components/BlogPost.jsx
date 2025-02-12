import PropTypes from "prop-types";
import styled from "styled-components";
import LikeBtn from "./LikeBtn";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";

const BlogPost = ({user_id, title, subtitle, body, image, updated, created, username, role, profilepic, id}) => {

  const Content = styled.div`
  font-size: 1.2em;
  text-align: justify;
  line-height: 1.5em;
  font-weight: bold;
  margin-top: 1em;
`;


  return (
<>
  <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-base antialiased">
    <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="mb-4 lg:mb-6 not-format">
          <address className="flex items-center mb-6 not-italic">
            <div className="inline-flex items-center mr-3 text-sm text-base">   
              <img
                className="mr-4 w-16 h-16 rounded-full"
                src={profilepic}
                alt={username}
              />
              <div className="relative">
                <Link to={`/users/${user_id}`}>
                <a
                  href="#"
                  rel="author"
                  className="text-xl font-bold text-accent"
                >
                  {username}
                </a>
                </Link>
                <p className="text-base">
                  {role}
                </p>
                <p className="text-base">
                  <time
                    dateTime={created}
                    title={updated}
                  >
                    {updated}
                  </time>
                </p>
              </div>
            
            <div className="tooltip" data-tip="Te ha gustado este post? Puedes añadirlo a tus favoritos haciendo click aqui.">  
              <LikeBtn id={id} />
            </div>  
          </div>  
          </address>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-primary lg:mb-6 lg:text-4xl">
            {title}
          </h1>
        </header>
        <p className="lead text-secondary">
         {subtitle}
        </p>
        <Content dangerouslySetInnerHTML={{ __html: body }} />;
        <figure>
        <ModalImage
                small={image}
                large={image}
                alt={title}
            /> 
          <figcaption>{subtitle}</figcaption>
        </figure>
        <h2></h2>
        <p>
        </p>
</article>
</div>
</main>
</>
      )
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  profilepic: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  user_id: PropTypes.string.isRequired,
}
export default BlogPost;