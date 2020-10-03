import { Section } from 'candi-ui';
import PropTypes from 'prop-types';

import { types } from 'utils/andesit';
import BlockNames from './BlockNames';

// =============================
// Component to be rendered
// =============================
const Features = ({ children }) => (
  <Section
    display="grid"
    gridTemplateColumns={{
      _: '1fr',
      tablet: 'repeat(2, 1fr)',
    }}
    gap="large"
    title="Features"
    margin={{ top: 'large' }}
  >
    {children}
  </Section>
);

Features.defaultProps = {
  children: null,
};

Features.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

// =============================
// Exported BlockType Schema
// =============================

const schema = {
  name: BlockNames.Features,
  label: 'Features',
  superType: types.BlockSuperType.Repeater,
  render: (props) => <Features {...props} />,
  itemsType: BlockNames.Feature,
};

export default schema;
