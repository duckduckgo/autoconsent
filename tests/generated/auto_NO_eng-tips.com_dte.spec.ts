import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eng-tips.com_dte', ['https://www.eng-tips.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
