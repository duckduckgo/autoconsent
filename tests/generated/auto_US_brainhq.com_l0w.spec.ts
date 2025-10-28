import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_brainhq.com_l0w', ['https://www.brainhq.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
