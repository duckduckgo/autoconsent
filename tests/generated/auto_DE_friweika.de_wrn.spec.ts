import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_friweika.de_wrn', ['https://friweika.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
