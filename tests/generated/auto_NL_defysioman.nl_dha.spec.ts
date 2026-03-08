import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_defysioman.nl_dha', ['https://defysioman.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
