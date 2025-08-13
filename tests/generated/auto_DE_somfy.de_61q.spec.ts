import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_somfy.de_61q', ['https://www.somfy.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
