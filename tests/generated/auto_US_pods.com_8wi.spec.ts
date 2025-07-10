import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_pods.com_8wi', ['https://www.pods.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
