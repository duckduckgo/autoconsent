import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wirwinzer.de_8wg', ['https://wirwinzer.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
