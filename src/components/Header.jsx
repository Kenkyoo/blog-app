import PropTypes from "prop-types";

const Header = ({title}) => {
    return (        
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-semibold tracking-tight text-pretty text-base sm:text-5xl">{title}</h2>
      <p className="mt-2 text-lg/8 text-base">Learn how to grow your business with our expert advice.</p>
    </div>
    )
} 

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};