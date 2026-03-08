import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blepha.de_al0', ['https://blepha.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
