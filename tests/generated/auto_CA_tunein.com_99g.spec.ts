import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tunein.com_99g', ['https://tunein.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
