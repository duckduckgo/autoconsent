import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_maclookup.app_1b5', ['https://maclookup.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
