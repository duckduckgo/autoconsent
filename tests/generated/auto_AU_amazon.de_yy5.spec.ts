import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_amazon.de_yy5', ['https://www.amazon.de/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
