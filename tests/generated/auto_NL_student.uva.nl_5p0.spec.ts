import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_student.uva.nl_5p0', ['https://student.uva.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
