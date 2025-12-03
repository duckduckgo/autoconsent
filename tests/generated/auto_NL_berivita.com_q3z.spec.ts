import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_berivita.com_q3z', ['https://www.berivita.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
