import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.bellroy.com_wui', ['https://de.bellroy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
