import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fapjerks.com_mhk', ['https://fapjerks.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
