import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_campact.de_wr2', ['https://www.campact.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
