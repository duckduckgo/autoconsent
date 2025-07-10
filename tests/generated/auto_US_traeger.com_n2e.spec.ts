import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_traeger.com_n2e', ['https://www.traeger.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
