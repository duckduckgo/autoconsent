import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zeise.de_it3', ['https://www.zeise.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
