import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_de-egel.com_vhi', ['https://de-egel.com/en/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
