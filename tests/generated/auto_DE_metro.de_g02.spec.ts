import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_metro.de_g02', ['https://www.metro.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
