import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_puregym.com_rb8', ['https://www.puregym.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
