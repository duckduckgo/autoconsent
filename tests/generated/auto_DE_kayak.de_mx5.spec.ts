import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kayak.de_mx5', ['https://www.kayak.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
