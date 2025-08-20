import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_samenhaus.de_ggz', ['https://www.samenhaus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
