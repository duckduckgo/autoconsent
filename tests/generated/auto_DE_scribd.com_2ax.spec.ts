import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_scribd.com_2ax', ['https://www.scribd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
