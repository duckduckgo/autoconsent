import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ehow.com_hjn', ['https://www.ehow.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
