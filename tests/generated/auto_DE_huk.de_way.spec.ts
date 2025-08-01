import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_huk.de_way', ['https://www.huk.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
