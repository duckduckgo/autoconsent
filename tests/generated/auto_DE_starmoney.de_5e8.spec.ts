import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_starmoney.de_5e8', ['https://www.starmoney.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
