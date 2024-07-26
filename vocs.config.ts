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
        {
          text: 'Demo Day',
          collapsed: true,
          items: [
            {
              text: 'Schedule',
              link: '/procedures/demo-day/schedule',
            },
            {
              text: 'Facilitate',
              link: '/procedures/demo-day/facilitate',
            },
            {
              text: 'Record',
              link: '/procedures/demo-day/record',
            },
            {
              text: 'Publish',
              link: '/procedures/demo-day/publish',
            },
            {
              text: 'Share',
              link: '/procedures/demo-day/share',
            },
          ],
        },
      ],
    },
  ],
});
