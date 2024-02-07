import {About} from 'components/sections/about';
import {Hero} from 'components/sections/hero';
import {PortfolioPreview} from 'components/sections/portfolio-preview';

import party from 'party-js';
import {FC} from 'react';
import {components} from 'twitter-api-sdk/dist/gen/openapi-types';

type IndexProps = {
  twitterData: components['schemas']['User'];
};

party.settings.respectReducedMotion = false;

export const Index: FC<IndexProps> = props => {
  return (
    <>
      <Hero twitterData={props.twitterData} />
      <About />
      {/* <Timeline /> */}
      <PortfolioPreview />
    </>
  );
};
export default Index;