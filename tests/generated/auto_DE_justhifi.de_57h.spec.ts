import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_justhifi.de_57h', ['https://www.justhifi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
