import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_variete.de_6cc', ['https://www.variete.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
