import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_aoausa.com_oc7', ['https://aoausa.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
