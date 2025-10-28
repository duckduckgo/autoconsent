import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_github.blog_lib', ['https://github.blog/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
