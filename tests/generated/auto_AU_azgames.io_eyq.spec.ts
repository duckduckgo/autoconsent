import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_azgames.io_eyq', ['https://azgames.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
