import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aecom.jobs_35a', ['https://aecom.jobs/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
