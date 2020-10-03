// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const pages = [
  {
    id: '37dafefa-039a-11eb-adc1-0242ac120002',
    name: 'Home',
    slug: 'home',
    meta: {
      title: 'Andesit',
      description: 'Andesit is Hybrid CMS to render React Component Dynamically and Remotely via a Dashboard.',
      language: 'en',
    },
    status: 'PUBLISHED',
    content: [
      {
        id: 'f52d274e-039a-11eb-adc1-0242ac120002',
        type: 'hero-unit',
        props: {
          title: 'Hybrid CMS With Andesit and NextJS',
          description: 'Easy way to render your React Component with Hybrid CMS by Andesit and NextJS.',
        },
      },
      {
        id: '5875a98c-0573-11eb-adc1-0242ac120002',
        type: 'features',
        props: {
          items: [
            {
              id: '5875aba8-0573-11eb-adc1-0242ac120002',
              type: 'feature',
              props: {
                title: 'Create your own component',
                description: 'Create your component based on our Atoms component, be a creator!',
              },
            },
            {
              id: '5875aca2-0573-11eb-adc1-0242ac120002',
              type: 'feature',
              props: {
                title: 'Deploy easily',
                description: 'Build with nextjs and deploy your site just like any other nextjs site',
              },
            },
            {
              id: '5875af5e-0573-11eb-adc1-0242ac120002',
              type: 'feature',
              props: {
                title: 'Intergration Support',
                description: 'Integrate with your own API to fetch dynamic data',
              },
            },
            {
              id: '5875b03a-0573-11eb-adc1-0242ac120002',
              type: 'feature',
              props: {
                title: 'Be Awesome',
                description: 'Just be awesome, be kind, helpful, and grateful',
              },
            },
          ],
        },
      },
    ],
  },
];

export default (req, res) => {
  const { query: { id } } = req;

  const page = pages.find((item) => item.slug === id && item.status === 'PUBLISHED');

  res.statusCode = 200;
  res.json(page);
};
