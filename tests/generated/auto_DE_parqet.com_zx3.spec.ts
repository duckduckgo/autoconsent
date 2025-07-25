import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_parqet.com_zx3', ['https://www.parqet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
