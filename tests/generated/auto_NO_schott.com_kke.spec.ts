import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_schott.com_kke', ['https://www.schott.com/en-us'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
