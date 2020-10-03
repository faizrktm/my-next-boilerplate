import {
  Box,
  Paragraph,
  DocumentOutline,
  Heading,
} from 'candi-ui';
import PropTypes from 'prop-types';

import { types } from 'utils/andesit';
import BlockNames from './BlockNames';

// =============================
// Component to be rendered
// =============================
const Feature = ({ title, description }) => (
  <DocumentOutline>
    <Box
      flex
      justify="center"
      pad="large"
      border={{
        color: 'black400',
        side: 'all',
        size: 'small',
      }}
      round="medium"
    >
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </Box>
  </DocumentOutline>
);

Feature.defaultProps = {
  title: null,
  description: null,
};

Feature.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

// =============================
// Exported BlockType Schema
// =============================

const schema = {
  name: BlockNames.Feature,
  label: 'Feature',
  superType: types.BlockSuperType.Single,
  render: (props) => <Feature {...props} />,
};

export default schema;
