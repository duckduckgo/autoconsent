import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_scuffers.com_el1', ['https://scuffers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
