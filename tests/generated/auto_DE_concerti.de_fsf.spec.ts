import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_concerti.de_fsf', ['https://www.concerti.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
