import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_allnatura.de_5u7', ['https://www.allnatura.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
