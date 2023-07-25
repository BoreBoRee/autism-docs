import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/autism-doc/blog',
    component: ComponentCreator('/autism-doc/blog', 'f9b'),
    exact: true
  },
  {
    path: '/autism-doc/blog/archive',
    component: ComponentCreator('/autism-doc/blog/archive', 'aa6'),
    exact: true
  },
  {
    path: '/autism-doc/blog/first-blog-post',
    component: ComponentCreator('/autism-doc/blog/first-blog-post', '8ac'),
    exact: true
  },
  {
    path: '/autism-doc/blog/long-blog-post',
    component: ComponentCreator('/autism-doc/blog/long-blog-post', 'a94'),
    exact: true
  },
  {
    path: '/autism-doc/blog/mdx-blog-post',
    component: ComponentCreator('/autism-doc/blog/mdx-blog-post', '20f'),
    exact: true
  },
  {
    path: '/autism-doc/blog/tags',
    component: ComponentCreator('/autism-doc/blog/tags', '481'),
    exact: true
  },
  {
    path: '/autism-doc/blog/tags/docusaurus',
    component: ComponentCreator('/autism-doc/blog/tags/docusaurus', '3bb'),
    exact: true
  },
  {
    path: '/autism-doc/blog/tags/facebook',
    component: ComponentCreator('/autism-doc/blog/tags/facebook', '35a'),
    exact: true
  },
  {
    path: '/autism-doc/blog/tags/hello',
    component: ComponentCreator('/autism-doc/blog/tags/hello', '656'),
    exact: true
  },
  {
    path: '/autism-doc/blog/tags/hola',
    component: ComponentCreator('/autism-doc/blog/tags/hola', '783'),
    exact: true
  },
  {
    path: '/autism-doc/blog/welcome',
    component: ComponentCreator('/autism-doc/blog/welcome', '176'),
    exact: true
  },
  {
    path: '/autism-doc/markdown-page',
    component: ComponentCreator('/autism-doc/markdown-page', '476'),
    exact: true
  },
  {
    path: '/autism-doc/docs',
    component: ComponentCreator('/autism-doc/docs', '5dc'),
    routes: [
      {
        path: '/autism-doc/docs/category/tutorial---basics',
        component: ComponentCreator('/autism-doc/docs/category/tutorial---basics', '8cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autism-doc/docs/category/tutorial---extras',
        component: ComponentCreator('/autism-doc/docs/category/tutorial---extras', 'b2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autism-doc/docs/intro',
        component: ComponentCreator('/autism-doc/docs/intro', '6fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autism-doc/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/autism-doc/docs/tutorial-basics/congratulations', '79e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autism-doc/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/autism-doc/docs/tutorial-basics/create-a-blog-post', '762'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autism-doc/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/autism-doc/docs/tutorial-basics/create-a-document', '585'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autism-doc/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/autism-doc/docs/tutorial-basics/create-a-page', 'd9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autism-doc/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/autism-doc/docs/tutorial-basics/deploy-your-site', '338'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autism-doc/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/autism-doc/docs/tutorial-basics/markdown-features', 'fc5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autism-doc/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/autism-doc/docs/tutorial-extras/manage-docs-versions', 'c81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/autism-doc/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/autism-doc/docs/tutorial-extras/translate-your-site', '5a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/autism-doc/',
    component: ComponentCreator('/autism-doc/', '428'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
