import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_google.com_asn', ['https://www.google.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
