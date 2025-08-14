import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_vosan.co_d7y', ['https://www.vosan.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
