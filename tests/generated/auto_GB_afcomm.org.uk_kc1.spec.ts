import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_afcomm.org.uk_kc1', ['https://afcomm.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
