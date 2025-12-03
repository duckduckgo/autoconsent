import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mgmotor.de_u26', ['https://www.mgmotor.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
