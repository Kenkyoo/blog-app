import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LikeBtn from "./LikeBtn";
import * as motion from "motion/react-client"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Article = ({ id, title, subtitle, category, update, userName, userPic, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      key={id} 
      className="card bg-base-100 w-96 shadow-xl animate__animated animate__fadeIn"
    >
      <figure>
      <LazyLoadImage 
        src={image}
        alt={title}
        effect="blur"
      />
      </figure>
      <div className="card-body">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={update} className="text-base">
          {update}
        </time>
          <a
            href=""
            className="relative z-10 rounded-full bg-accent px-3 py-1.5 font-medium text-primary-content hover:bg-gray-100"
          >
            {category}
          </a>
      </div>
        <h2 className="card-title">
          <Link to={`/posts/${id}`}>
            {title}
          </Link>
        </h2>
        <p>{subtitle}</p>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img alt={userName} src={userPic} className="size-10 rounded-full bg-base" />
          <div className="text-sm/6">
            <p className="font-semibold text-base">
              <Link to={`/user/${id}`}>{userName}</Link>
              <span className="absolute inset-0" />
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <LikeBtn id={id}/>
        </div>
      </div>
    </motion.div>
  );
};

Article.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  update: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userPic: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Article;
