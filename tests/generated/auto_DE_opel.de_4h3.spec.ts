import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_opel.de_4h3', ['https://www.opel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
