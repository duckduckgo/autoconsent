import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_qmul.ac.uk_7io', ['https://www.qmul.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
