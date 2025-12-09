import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_magazin.com_vks', ['https://www.magazin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
