import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_metro.de_h1j', ['https://www.metro.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
