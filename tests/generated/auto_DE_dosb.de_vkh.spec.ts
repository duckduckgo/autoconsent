import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dosb.de_vkh', ['https://www.dosb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
