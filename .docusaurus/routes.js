
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/b4ll-docs/',
  component: ComponentCreator('/b4ll-docs/','aa3'),
  exact: true,
},
{
  path: '/b4ll-docs/__docusaurus/debug',
  component: ComponentCreator('/b4ll-docs/__docusaurus/debug','98b'),
  exact: true,
},
{
  path: '/b4ll-docs/__docusaurus/debug/config',
  component: ComponentCreator('/b4ll-docs/__docusaurus/debug/config','072'),
  exact: true,
},
{
  path: '/b4ll-docs/__docusaurus/debug/content',
  component: ComponentCreator('/b4ll-docs/__docusaurus/debug/content','9fb'),
  exact: true,
},
{
  path: '/b4ll-docs/__docusaurus/debug/globalData',
  component: ComponentCreator('/b4ll-docs/__docusaurus/debug/globalData','f0a'),
  exact: true,
},
{
  path: '/b4ll-docs/__docusaurus/debug/metadata',
  component: ComponentCreator('/b4ll-docs/__docusaurus/debug/metadata','3a1'),
  exact: true,
},
{
  path: '/b4ll-docs/__docusaurus/debug/registry',
  component: ComponentCreator('/b4ll-docs/__docusaurus/debug/registry','043'),
  exact: true,
},
{
  path: '/b4ll-docs/__docusaurus/debug/routes',
  component: ComponentCreator('/b4ll-docs/__docusaurus/debug/routes','040'),
  exact: true,
},
{
  path: '/b4ll-docs/blog',
  component: ComponentCreator('/b4ll-docs/blog','217'),
  exact: true,
},
{
  path: '/b4ll-docs/blog/hello-world',
  component: ComponentCreator('/b4ll-docs/blog/hello-world','faa'),
  exact: true,
},
{
  path: '/b4ll-docs/blog/hola',
  component: ComponentCreator('/b4ll-docs/blog/hola','df1'),
  exact: true,
},
{
  path: '/b4ll-docs/blog/tags',
  component: ComponentCreator('/b4ll-docs/blog/tags','983'),
  exact: true,
},
{
  path: '/b4ll-docs/blog/tags/docusaurus',
  component: ComponentCreator('/b4ll-docs/blog/tags/docusaurus','f35'),
  exact: true,
},
{
  path: '/b4ll-docs/blog/tags/facebook',
  component: ComponentCreator('/b4ll-docs/blog/tags/facebook','23d'),
  exact: true,
},
{
  path: '/b4ll-docs/blog/tags/hello',
  component: ComponentCreator('/b4ll-docs/blog/tags/hello','c85'),
  exact: true,
},
{
  path: '/b4ll-docs/blog/tags/hola',
  component: ComponentCreator('/b4ll-docs/blog/tags/hola','4de'),
  exact: true,
},
{
  path: '/b4ll-docs/blog/welcome',
  component: ComponentCreator('/b4ll-docs/blog/welcome','cf9'),
  exact: true,
},
{
  path: '/b4ll-docs/markdown-page',
  component: ComponentCreator('/b4ll-docs/markdown-page','c05'),
  exact: true,
},
{
  path: '/b4ll-docs/docs',
  component: ComponentCreator('/b4ll-docs/docs','3f6'),
  
  routes: [
{
  path: '/b4ll-docs/docs/',
  component: ComponentCreator('/b4ll-docs/docs/','769'),
  exact: true,
},
{
  path: '/b4ll-docs/docs/doc2',
  component: ComponentCreator('/b4ll-docs/docs/doc2','788'),
  exact: true,
},
{
  path: '/b4ll-docs/docs/doc3',
  component: ComponentCreator('/b4ll-docs/docs/doc3','c00'),
  exact: true,
},
{
  path: '/b4ll-docs/docs/mdx',
  component: ComponentCreator('/b4ll-docs/docs/mdx','d14'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
