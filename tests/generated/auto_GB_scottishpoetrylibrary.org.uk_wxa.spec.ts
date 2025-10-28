import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scottishpoetrylibrary.org.uk_wxa', ['https://www.scottishpoetrylibrary.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
