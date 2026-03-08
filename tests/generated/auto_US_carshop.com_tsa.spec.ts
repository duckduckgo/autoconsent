import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_carshop.com_tsa', ['https://carshop.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
