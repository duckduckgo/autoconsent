import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fapjerks.com_85b', ['https://fapjerks.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
