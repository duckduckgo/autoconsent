import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_humanitas.nl_kwz', ['https://www.humanitas.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
