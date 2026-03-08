import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dreirad.de_kvd', ['https://dreirad.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
