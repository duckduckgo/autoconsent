import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.jura.com_fpx', ['https://fr.jura.com/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
