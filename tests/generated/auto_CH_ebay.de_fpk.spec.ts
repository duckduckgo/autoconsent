import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ebay.de_fpk', ['https://www.ebay.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
