import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rustdesk.com_0dh', ['https://rustdesk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
