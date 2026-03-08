import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fr.oncams.com_1b2', ['https://fr.oncams.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
