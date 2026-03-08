import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ee.hm.edu_tky', ['https://ee.hm.edu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
