import { defineConfig } from 'vocs';

export default defineConfig({
  title: 'PublicHaus',
  sidebar: [
    {
      text: 'Pubkeepers',
      link: '/pubkeepers',
    },
    {
      text: 'Safes',
      link: '/safes',
    },
    {
      text: 'Hats',
      link: '/hats',
    },
    {
      text: 'Procedures',
      collapsed: false,
      items: [
        {
          text: 'Make Payments From Superfluid',
          link: '/procedures/superfluid',
        },
        {
          text: 'Track Social Media Engagement',
          link: '/procedures/social',
        },
      ],
    },
  ],
});
