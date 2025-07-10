import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pdfdrive.to_efu', ['https://www.pdfdrive.to/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
