import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_scouting.nl_44c', ['https://www.scouting.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
