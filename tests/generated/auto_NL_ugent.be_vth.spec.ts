import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ugent.be_vth', ['https://www.ugent.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
