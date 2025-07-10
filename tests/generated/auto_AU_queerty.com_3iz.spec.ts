import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_queerty.com_3iz', ['https://www.queerty.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
