import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spankbang.com_51e', ['https://spankbang.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
