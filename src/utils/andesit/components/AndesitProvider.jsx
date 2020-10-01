import React from 'react';
import PropTypes from 'prop-types';

export const AndesitContext = React.createContext();

export const AndesitProvider = ({ config, children }) => (
  <AndesitContext.Provider value={{
    blockTypeSchema: config.blockTypeSchema,
  }}
  >
    {children}
  </AndesitContext.Provider>
);

AndesitProvider.defaultProps = {
  config: null,
  children: null,
};

AndesitProvider.propTypes = {
  config: PropTypes.shape({
    blockTypeSchema: PropTypes.oneOfType([PropTypes.object]),
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
