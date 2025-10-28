import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ox.ac.uk_sfn', ['https://www.ox.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
