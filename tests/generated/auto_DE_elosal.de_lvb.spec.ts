import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elosal.de_lvb', ['https://elosal.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
