import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_accio.com_kdu', ['https://www.accio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
