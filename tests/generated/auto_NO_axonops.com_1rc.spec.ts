import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_axonops.com_1rc', ['https://axonops.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
