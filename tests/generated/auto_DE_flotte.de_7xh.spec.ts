import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_flotte.de_7xh', ['https://flotte.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
