import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_betway.com_rcv', ['https://betway.com/en-gb/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
