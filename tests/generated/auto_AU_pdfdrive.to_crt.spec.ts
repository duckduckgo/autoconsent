import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pdfdrive.to_crt', ['https://www.pdfdrive.to/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
