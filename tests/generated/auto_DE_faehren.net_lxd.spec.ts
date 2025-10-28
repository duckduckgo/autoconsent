import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_faehren.net_lxd', ['https://faehren.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
