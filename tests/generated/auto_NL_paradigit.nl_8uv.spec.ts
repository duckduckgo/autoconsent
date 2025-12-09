import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_paradigit.nl_8uv', ['https://www.paradigit.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
