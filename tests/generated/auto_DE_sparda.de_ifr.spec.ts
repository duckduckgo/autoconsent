import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparda.de_ifr', ['https://www.sparda.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
