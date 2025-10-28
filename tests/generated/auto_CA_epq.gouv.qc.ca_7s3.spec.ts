import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_epq.gouv.qc.ca_7s3', ['https://epq.gouv.qc.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
