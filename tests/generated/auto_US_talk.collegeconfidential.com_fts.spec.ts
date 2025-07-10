import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_talk.collegeconfidential.com_fts', ['https://talk.collegeconfidential.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
