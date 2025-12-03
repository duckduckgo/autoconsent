import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_trainsplit.com_0', ['https://trainsplit.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
