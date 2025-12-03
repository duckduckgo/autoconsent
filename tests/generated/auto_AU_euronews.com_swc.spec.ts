import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_euronews.com_swc', ['https://www.euronews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
