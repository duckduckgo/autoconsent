import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_truenas.com_psa', ['https://www.truenas.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
