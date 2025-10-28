import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_simplicity.com_20a', ['https://simplicity.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
