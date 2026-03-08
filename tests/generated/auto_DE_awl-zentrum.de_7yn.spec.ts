import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_awl-zentrum.de_7yn', ['https://awl-zentrum.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
