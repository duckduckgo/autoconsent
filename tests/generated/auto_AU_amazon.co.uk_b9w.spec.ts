import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_amazon.co.uk_b9w', ['https://www.amazon.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
