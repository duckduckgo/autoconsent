import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_core.ac.uk_v9e', ['https://core.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
