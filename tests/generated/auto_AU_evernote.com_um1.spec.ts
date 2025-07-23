import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_evernote.com_um1', ['https://evernote.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
