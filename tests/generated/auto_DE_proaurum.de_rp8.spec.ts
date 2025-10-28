import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_proaurum.de_rp8', ['https://www.proaurum.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
