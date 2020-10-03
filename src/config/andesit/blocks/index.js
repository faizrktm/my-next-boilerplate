import HeroUnit from './HeroUnit';
import Features from './Features';
import Feature from './Feature';
import BlockNames from './BlockNames';

const schema = {
  [BlockNames.HeroUnit]: HeroUnit,
  [BlockNames.Features]: Features,
  [BlockNames.Feature]: Feature,
};

export default schema;
