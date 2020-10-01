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
    ],
  },
];

export default (req, res) => {
  const { query: { id } } = req;

  const page = pages.find((item) => item.slug === id && item.status === 'PUBLISHED');

  res.statusCode = 200;
  res.json(page);
};
