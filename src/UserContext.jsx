import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import { createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const { user, isAuthenticated } = useAuth0();

    const data = isAuthenticated
        ? {
            name: user.name,
            email: user.email,
            picture: user.picture,
            id: user.sub
        }
        : {};

    console.log(data.id);

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


