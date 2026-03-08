import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ekomarkt.de_kef', ['https://ekomarkt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
