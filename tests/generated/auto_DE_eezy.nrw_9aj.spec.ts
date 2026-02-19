import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eezy.nrw_9aj', ['https://eezy.nrw/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
