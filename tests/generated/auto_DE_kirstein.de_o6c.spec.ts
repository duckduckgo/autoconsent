import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kirstein.de_o6c', ['https://www.kirstein.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
