import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_farmers.com_p3v', ['https://www.farmers.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
