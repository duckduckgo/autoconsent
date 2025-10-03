import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_scouting.nl_ue4', ['https://www.scouting.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
