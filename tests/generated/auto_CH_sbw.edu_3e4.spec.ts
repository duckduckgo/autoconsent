import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sbw.edu_3e4', ['https://www.sbw.edu/en/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
