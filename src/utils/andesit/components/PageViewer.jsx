/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import types from '../types';
import { AndesitContext } from './AndesitProvider';

function renderElement(content, blockTypeSchema) {
  return content.map(({
    type,
    id,
    props,
    items,
  }) => {
    const item = blockTypeSchema[type];
    const Component = item?.render;
    if (!Component) return null;

    if (item.superType === types.BlockSuperType.Repeater && items) {
      return renderElement(items, blockTypeSchema);
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
