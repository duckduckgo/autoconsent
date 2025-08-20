import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_litze24.de_2wq', ['https://www.litze24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
