import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_amazon.fr_sxl', ['https://www.amazon.fr/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
