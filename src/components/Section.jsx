import Header from "./Header";
import PropTypes from "prop-types";

const Section = ({children, title}) => {
    return (    
    <div className="bg-base py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Header title={title}/>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-base pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {children}
      </div>
    </div>
    </div>  
    )
}

export default Section;

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};