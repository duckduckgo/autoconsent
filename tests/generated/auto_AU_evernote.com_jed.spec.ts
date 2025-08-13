import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_evernote.com_jed', ['https://evernote.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
