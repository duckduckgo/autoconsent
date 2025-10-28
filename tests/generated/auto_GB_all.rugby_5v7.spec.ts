import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_all.rugby_5v7', ['https://all.rugby/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
