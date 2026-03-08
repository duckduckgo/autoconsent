import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aniguessr.com_qid', ['https://aniguessr.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
