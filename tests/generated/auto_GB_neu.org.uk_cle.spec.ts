import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_neu.org.uk_cle', ['https://neu.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
