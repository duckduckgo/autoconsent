import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_evernote.com_54r', ['https://evernote.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
