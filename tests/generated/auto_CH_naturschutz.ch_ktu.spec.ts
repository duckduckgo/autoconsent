import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_naturschutz.ch_ktu', ['https://naturschutz.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
