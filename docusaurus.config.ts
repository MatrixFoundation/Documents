import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "MatrixFoundation",
  tagline: "Looking forward to the arrival of a new era!",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "MatrixFoundation", // Usually your GitHub org/user name.
  projectName: "Documents", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/MatrixFoundation/Documents/tree/main/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/MatrixFoundation/Documents/tree/main/blog",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "MatrixFoundation",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "homeSidebar",
          className: "nav-home",
          position: "left",
          label: "Home",
        },
        {
          type: "docSidebar",
          sidebarId: "matrixSidebar",
          className: "nav-matrix",
          position: "left",
          label: "Matrix",
        },
        {
          type: "docSidebar",
          sidebarId: "blockchainSidebar",
          className: "nav-blockchain",
          position: "left",
          label: "Blockchain",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          className: "nav-tutorials",
          position: "left",
          label: "Tutorials",
        },
        {
          type: "docSidebar",
          sidebarId: "aiSidebar",
          className: "nav-ai",
          position: "left",
          label: "AI",
        },
        {
          type: "docSidebar",
          sidebarId: "gamedevSidebar",
          className: "nav-gamedev",
          position: "left",
          label: "GameDev",
        },
        {
          type: "docSidebar",
          sidebarId: "cryptoSidebar",
          className: "nav-crypto",
          position: "left",
          label: "Crypto",
        },
        {
          type: "docSidebar",
          sidebarId: "projectSidebar",
          className: "nav-projects",
          position: "left",
          label: "Projects",
        },
        {
          to: "/blog",
          label: "Blogs",
          position: "left",
          className: "nav-blogs",
          activeBasePath: "/blog",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/MatrixFoundation",
          className: "header-github-link",
          position: "right",
        },
        {
          href: "https://x.com/MetaMatrixVerse",
          className: "header-twitter-link",
          position: "right",
        },
        {
          href: "https://discord.gg/T9cS7xq7Qr",
          className: "header-discord-link",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      logo: {
        alt: "Logo",
        src: "img/logo.png",
        width: 200,
      },
      copyright: `Made with ❤️ by <a target="_blank" rel="noopener noreferrer" href="https://github.com/MatrixFoundation">MatrixFoundation.</a>`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "c",
        "cs",
        "cpp",
        "cmake",
        "csv",
        "dart",
        "dockerfile",
        "git",
        "glsl",
        "go",
        "go-mod",
        "hlsl",
        "less",
        "lua",
        "py",
        "qml",
        "jsx",
        "tsx",
        "rust",
        "solidity",
        "sql",
        "ts",
        "wasm",
        "yaml",
        "zig",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
