import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_tvguide.com_wn7', ['https://www.tvguide.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
