import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_houzz.de_178', ['https://www.houzz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
