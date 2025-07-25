import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mgmotor.de_orr', ['https://www.mgmotor.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
