import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_can.mizuno.com_feu', ['https://can.mizuno.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
