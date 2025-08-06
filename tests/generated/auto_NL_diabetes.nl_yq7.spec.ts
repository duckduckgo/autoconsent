import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_diabetes.nl_yq7', ['https://www.diabetes.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
