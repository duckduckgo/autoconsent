import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frosch.de_td6', ['https://frosch.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
