import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_evernote.com_ybh', ['https://evernote.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
