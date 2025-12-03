import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_utwente.nl_kon', ['https://www.utwente.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
