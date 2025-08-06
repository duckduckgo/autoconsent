import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_justhifi.de_l9v', ['https://www.justhifi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
