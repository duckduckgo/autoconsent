import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_samenhaus.de_cgo', ['https://www.samenhaus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
