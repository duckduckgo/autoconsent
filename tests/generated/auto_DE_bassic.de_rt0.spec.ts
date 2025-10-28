import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bassic.de_rt0', ['https://www.bassic.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
