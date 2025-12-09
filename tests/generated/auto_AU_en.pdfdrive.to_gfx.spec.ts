import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_en.pdfdrive.to_gfx', ['https://en.pdfdrive.to/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
