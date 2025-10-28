import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ebay.co.uk_8fx', ['https://www.ebay.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
