import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cvefeed.io_ypo', ['https://cvefeed.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
