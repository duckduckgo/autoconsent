import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_diezukunft.de_wkx', ['https://diezukunft.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
