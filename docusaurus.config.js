// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
    title: 'Biometrics 4 All',
    tagline: '',
    url: "https://docs.biometrics.gsmainclusivetechlab.io",
    baseUrl: "/",
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'gsmainclusivetechlab', // Usually your GitHub org/user name.
    projectName: 'b4ll-docs', // Usually your repo name.
    themeConfig: {
        prism: {
            additionalLanguages: ['properties', 'ini'],
        },
        navbar: {
            title: 'B4LL - Biometrics For All - Documentation',
        },
        footer: {
            style: 'dark',

            copyright: `Copyright © 2023 GSMA. All rights reserved.`,
        },
        announcementBar: {
            id: 'archive_notice',
            content:
                'This project has been archived as of the 31st of March 2024. Please contact inclusivetechlab@gsma.com for more information.',
            backgroundColor: '#EBDDAD',
            textColor: '#000000',
            isCloseable: false,
        },
        
        // navbar: {
        //     //title: 'B4LL - Biometrics For All - Documentation',
            
        //     items: [
        //         {
        //           href: 'https://biometrics.gsmainclusivetechlab.io/',
        //           label: 'B4LL - Biometrics 4 All',
        //           position: 'left', // or 'right'
        //         },
        //     ]
        // },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./src/frontend/sidebars.js'),
                    routeBasePath: '/',
                    // editUrl:
                    //     'https://github.com/gsmainclusivetechlab/bilt-voice/tree/docs',
                },
                theme: {
                    customCss: require.resolve('./src/frontend/custom.css'),
                },
            },
        ],
    ],
    plugins: [path.resolve(__dirname, 'src/frontend/webpack.js')],
};
