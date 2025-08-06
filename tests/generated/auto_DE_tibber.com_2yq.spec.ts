import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tibber.com_2yq', ['https://tibber.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
