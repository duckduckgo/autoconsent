import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_macg.co_6w0', ['https://www.macg.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
