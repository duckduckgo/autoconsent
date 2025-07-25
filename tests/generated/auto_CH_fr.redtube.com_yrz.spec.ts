import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.redtube.com_yrz', ['https://fr.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
