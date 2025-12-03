import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cameranu.nl_f6q', ['https://www.cameranu.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
