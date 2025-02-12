import PropTypes from 'prop-types';

const Pagination = ({ setPage, totalPages, page }) => {
    return (      
      <div className="join grid grid-cols-2 mx-auto mt-4">
        <button 
          disabled={page === 1}
          className="join-item btn btn-outline"
          onClick={() => setPage(page - 1)}
          >Previous page
        </button>
        <button 
          disabled={page === totalPages}
          className="join-item btn btn-outline"
          onClick={() => setPage(page + 1)}
          >Next
        </button>
        <h4 className='text-center mt-4 mx-auto'>Page number: {page}</h4>
      </div>)
}

Pagination.propTypes = {
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default Pagination;