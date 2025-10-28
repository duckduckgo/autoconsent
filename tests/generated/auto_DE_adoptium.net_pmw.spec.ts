import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_adoptium.net_pmw', ['https://adoptium.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
