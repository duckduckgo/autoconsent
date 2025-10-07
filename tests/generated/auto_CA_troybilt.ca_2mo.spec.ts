import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_troybilt.ca_2mo', ['https://www.troybilt.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
