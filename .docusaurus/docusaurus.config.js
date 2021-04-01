export default {
  "title": "Biometrics 4 All",
  "tagline": "",
  "url": "https://gsmainclusivetechlab.github.io",
  "baseUrl": "/b4ll-docs/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "gsmainclusivetechlab",
  "projectName": "b4ll-docs",
  "themeConfig": {
    "prism": {
      "additionalLanguages": [
        "properties",
        "ini"
      ]
    },
    "navbar": {
      "items": [
        {
          "href": "https://biometrics.gsmainclusivetechlab.io/",
          "label": "B4LL - Biometrics 4 All",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2020 GSMA. All rights reserved.",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/fingent/Desktop/WorkSpace/B4 client/b4ll-docs/src/frontend/sidebars.js",
          "routeBasePath": "/docs"
        },
        "theme": {
          "customCss": "/home/fingent/Desktop/WorkSpace/B4 client/b4ll-docs/src/frontend/custom.css"
        }
      }
    ]
  ],
  "plugins": [
    "/home/fingent/Desktop/WorkSpace/B4 client/b4ll-docs/src/frontend/webpack.js"
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};