import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hatland.nl_9ya', ['https://www.hatland.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
