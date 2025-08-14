import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hawk.de_h8w', ['https://www.hawk.de/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
