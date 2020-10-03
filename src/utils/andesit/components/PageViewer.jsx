/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import types from '../types';
import { AndesitContext } from './AndesitProvider';

function renderElement(content, blockTypeSchema) {
  return content.map(({
    id,
    type,
    props,
  }) => {
    const item = blockTypeSchema[type];
    const Component = item?.render;
    if (!Component) return null;

    if (item.superType === types.BlockSuperType.Repeater && props?.items) {
      const { items, ...rest } = props;
      return (
        <Component key={id} {...rest}>
          {renderElement(items, blockTypeSchema)}
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
