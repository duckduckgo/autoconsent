import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_starmoney.de_xu3', ['https://www.starmoney.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
