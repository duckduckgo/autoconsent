import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_en.pdfdrive.to_1lm', ['https://en.pdfdrive.to/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
