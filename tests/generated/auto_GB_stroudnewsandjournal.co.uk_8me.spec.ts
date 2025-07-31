import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stroudnewsandjournal.co.uk_8me', ['https://www.stroudnewsandjournal.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
