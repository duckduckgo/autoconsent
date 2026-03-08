import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bahnshop.de_wij', ['https://bahnshop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
