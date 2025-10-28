import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hartpunkt.de_1u6', ['https://www.hartpunkt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
