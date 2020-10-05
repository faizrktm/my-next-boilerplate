/* eslint-disable react/prop-types */
import React from 'react';
import * as Candi from 'candi-ui';
import types from '../types';

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
  const { content } = page;
  const elements = renderElement(content);
  return (
    <>
      {elements}
    </>
  );
}
