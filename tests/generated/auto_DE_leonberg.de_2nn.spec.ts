import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_leonberg.de_2nn', ['https://www.leonberg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
