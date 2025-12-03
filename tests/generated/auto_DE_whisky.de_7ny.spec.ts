import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_whisky.de_7ny', ['https://www.whisky.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
