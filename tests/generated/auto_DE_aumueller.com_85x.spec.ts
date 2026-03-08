import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aumueller.com_85x', ['https://aumueller.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
