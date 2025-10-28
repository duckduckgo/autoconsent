import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hrworks.de_7h7', ['https://www.hrworks.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
