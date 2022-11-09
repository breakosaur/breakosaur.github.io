/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    'welcome',
    {
      type: 'category',
      label: 'Pixel Sky Creator',
      collapsed: false,
      items: [
        'pixel-sky-creator/installation',
        'pixel-sky-creator/add-a-sky',
        'pixel-sky-creator/change-the-sky-size',
        'pixel-sky-creator/change-the-sky-position',
        'pixel-sky-creator/change-the-sky-colors',
        'pixel-sky-creator/change-the-sky-dither',
        'pixel-sky-creator/add-a-new-dither-sprite',
        'pixel-sky-creator/changelog',
      ],
    },
  ],
};

module.exports = sidebars;
