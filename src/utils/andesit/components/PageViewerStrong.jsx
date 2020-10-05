/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import * as Candi from 'candi-ui';
import types from '../types';
import { AndesitContext } from './AndesitProvider';

function renderElement(content) {
  return content.map(({
    id,
    type,
    component,
    props,
  }) => {
    const Component = Candi[component];
    if (!Component) return null;

    if (type === types.BlockSuperType.Repeater && props?.items) {
      const { items, ...rest } = props;
      return (
        <Component key={id} {...rest}>
          {renderElement(items)}
        </Component>
      );
    }
    return <Component key={id} {...props} />;
  });
}

export default function PageViewer({ page }) {
  const { blockTypeSchema } = useContext(AndesitContext);
  const { content } = page;
  const elements = renderElement(content, blockTypeSchema);
  return (
    <>
      {elements}
    </>
  );
}
