import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_prusa3d.com_pyq', ['https://www.prusa3d.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
