import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_reshade.me_qap', ['https://reshade.me/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
