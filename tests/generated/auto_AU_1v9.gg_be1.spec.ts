import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_1v9.gg_be1', ['https://1v9.gg/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
