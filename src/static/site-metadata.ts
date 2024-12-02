interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://shyrz.run',
  logo: 'https://avatars.githubusercontent.com/u/5728981?v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://shyrz.me',
    },
    {
      name: 'About',
      url: 'https://github.com/shyrz/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
