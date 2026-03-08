import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_duemmer.de_dao', ['https://duemmer.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
