import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kirstein.de_tu4', ['https://www.kirstein.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
