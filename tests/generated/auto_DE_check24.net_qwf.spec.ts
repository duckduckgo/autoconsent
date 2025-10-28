import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_check24.net_qwf', ['https://www.check24.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
