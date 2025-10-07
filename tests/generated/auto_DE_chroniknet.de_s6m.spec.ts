import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_chroniknet.de_s6m', ['https://chroniknet.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
