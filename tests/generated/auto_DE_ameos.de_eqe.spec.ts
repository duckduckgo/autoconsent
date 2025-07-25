import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ameos.de_eqe', ['https://www.ameos.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
