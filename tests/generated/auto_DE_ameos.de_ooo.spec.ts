import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ameos.de_ooo', ['https://www.ameos.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
