import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kayak.de_sna', ['https://www.kayak.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
