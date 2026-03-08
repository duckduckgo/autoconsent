import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_artway.eu_ejl', ['https://artway.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
