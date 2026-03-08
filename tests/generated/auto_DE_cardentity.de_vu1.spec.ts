import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cardentity.de_vu1', ['https://cardentity.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
