import { Component } from 'react';


class SearchMain extends Component {
    
    render() {

        return(
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-white bg-light"
                                placeholder="Buscar..." aria-label="Buscar" />
            </form>
        );
    }
}

export default SearchMain;