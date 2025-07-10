import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pcgamesn.com_trm', ['https://www.pcgamesn.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
