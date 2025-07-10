import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_stocktwits.com_1zq', ['https://stocktwits.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
