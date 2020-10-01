import { Box, Heading, Text } from 'candi-ui';
import PropTypes from 'prop-types';

import { types } from 'utils/andesit';
import BlockNames from './BlockNames';

// =============================
// Component to be rendered
// =============================
const HeroUnit = ({ title, description }) => (
  <Box
    height={{
      _: '40vh',
      desktop: '50vh',
    }}
    pad="large"
    align="center"
    justify="center"
    background="primary500"
    as="section"
  >
    <Heading size="large" textAlign="center" color="white">{title}</Heading>
    <Text
      textAlign="center"
      color="white"
      margin={{ top: 'small' }}
      size={{
        _: 'medium',
        desktop: 'large',
      }}
    >
      {description}
    </Text>
  </Box>
);

HeroUnit.defaultProps = {
  title: null,
  description: null,
};

HeroUnit.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

// =============================
// Exported BlockType Schema
// =============================

const schema = {
  name: BlockNames.HeroUnit,
  label: 'Hero Unit',
  superType: types.BlockSuperType.Single,
  render: (props) => <HeroUnit {...props} />,
};

export default schema;
