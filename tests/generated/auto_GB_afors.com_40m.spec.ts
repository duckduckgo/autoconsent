import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_afors.com_40m', ['https://afors.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
