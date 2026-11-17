import generateCMPTests from '../playwright/runner';

const urls = ['https://www.octoparse.jp/', 'https://www.octoparse.com/', 'https://www.octoparse.de/'];

generateCMPTests('octoparse', urls, { mobile: true });
generateCMPTests('octoparse', urls, { mobile: false });
