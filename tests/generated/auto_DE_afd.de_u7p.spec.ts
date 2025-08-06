import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_afd.de_u7p', ['https://www.afd.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
