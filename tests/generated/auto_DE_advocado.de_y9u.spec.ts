import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_advocado.de_y9u', ['https://www.advocado.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
