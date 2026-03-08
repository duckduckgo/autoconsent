import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_binopolis.com_w7p', ['https://binopolis.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
