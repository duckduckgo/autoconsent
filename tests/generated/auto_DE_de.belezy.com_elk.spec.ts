import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.belezy.com_elk', ['https://de.belezy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
