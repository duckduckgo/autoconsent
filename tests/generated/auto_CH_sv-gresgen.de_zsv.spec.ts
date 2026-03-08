import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sv-gresgen.de_zsv', ['http://www.sv-gresgen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
