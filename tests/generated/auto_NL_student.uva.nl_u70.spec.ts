import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_student.uva.nl_u70', ['https://student.uva.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
