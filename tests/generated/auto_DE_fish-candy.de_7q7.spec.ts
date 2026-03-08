import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fish-candy.de_7q7', ['https://fish-candy.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
