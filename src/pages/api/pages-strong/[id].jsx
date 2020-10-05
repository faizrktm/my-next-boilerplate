// example payload pages.
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
        type: 'REPEATER',
        component: 'Box',
        props: {
          height: {
            _: '40vh',
            desktop: '50vh',
          },
          pad: 'large',
          align: 'center',
          justify: 'center',
          background: 'primary500',
          as: 'section',
          items: [
            {
              id: '5875a98c-0573-11eb-adc1-0242ac120002',
              type: 'SINGLE',
              component: 'Heading',
              props: {
                size: 'large',
                textAlign: 'center',
                color: 'white',
                children: 'Hero Unit Title',
              },
            },
            {
              id: '5875a42c-0573-11eb-adc1-0242ac120002',
              type: 'SINGLE',
              component: 'Text',
              props: {
                textAlign: 'center',
                color: 'white',
                margin: { top: 'small' },
                size: {
                  _: 'medium',
                  desktop: 'large',
                },
                children: 'Hero Unit Description',
              },
            },
          ],
        },
      },
      {
        id: '5875x42c-0573-11eb-adc1-0242ac120002',
        component: 'Section',
        type: 'REPEATER',
        props: {
          display: 'grid',
          gridTemplateColumns: {
            _: '1fr',
            tablet: 'repeat(2, 1fr)',
          },
          gap: 'large',
          title: 'Features',
          margin: { top: 'large' },
          items: [
            {
              id: '5875n42c-0573-11eb-adc1-0242ac120002',
              component: 'DocumentOutline',
              type: 'REPEATER',
              props: {
                items: [
                  {
                    id: '5875l42c-0573-11eb-adc1-0242ac120002',
                    component: 'Box',
                    type: 'REPEATER',
                    props: {
                      flex: true,
                      justify: 'center',
                      pad: 'large',
                      border: {
                        color: 'black400',
                        side: 'all',
                        size: 'small',
                      },
                      round: 'medium',
                      items: [
                        {
                          id: '5875f42c-0573-11eb-adc1-0242ac120002',
                          component: 'Heading',
                          type: 'SINGLE',
                          props: {
                            children: 'Feature 1 Title',
                          },
                        },
                        {
                          id: '5875q42c-0573-11eb-adc1-0242ac120002',
                          component: 'Paragraph',
                          type: 'SINGLE',
                          props: {
                            children: 'Feature 1 Description',
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              id: '5875n42d-0573-11eb-adc1-0242ac120002',
              component: 'DocumentOutline',
              type: 'REPEATER',
              props: {
                items: [
                  {
                    id: '5875l42q-0573-11eb-adc1-0242ac120002',
                    component: 'Box',
                    type: 'REPEATER',
                    props: {
                      flex: true,
                      justify: 'center',
                      pad: 'large',
                      border: {
                        color: 'black400',
                        side: 'all',
                        size: 'small',
                      },
                      round: 'medium',
                      items: [
                        {
                          id: '5875f42n-0573-11eb-adc1-0242ac120002',
                          component: 'Heading',
                          type: 'SINGLE',
                          props: {
                            children: 'Feature 2 Title',
                          },
                        },
                        {
                          id: '5875q42c-0573-11eb-adc1-0242ac120002',
                          component: 'Paragraph',
                          type: 'SINGLE',
                          props: {
                            children: 'Feature 2 Description',
                          },
                        },
                      ],
                    },
                  },
                ],
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
