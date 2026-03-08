import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_depurmaryn.nl_iye', ['https://depurmaryn.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
