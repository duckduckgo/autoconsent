import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pdfdrive.to_jra', ['https://www.pdfdrive.to/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
