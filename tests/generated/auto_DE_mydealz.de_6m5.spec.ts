import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mydealz.de_6m5', ['https://www.mydealz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
