import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_justhifi.de_jj9', ['https://www.justhifi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
