import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_paroles.net_52y', ['https://www.paroles.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
