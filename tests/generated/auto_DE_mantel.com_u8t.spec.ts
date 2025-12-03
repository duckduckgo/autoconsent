import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mantel.com_u8t', ['https://www.mantel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
