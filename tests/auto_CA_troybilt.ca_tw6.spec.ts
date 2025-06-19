import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_troybilt.ca_tw6', ['https://www.troybilt.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
