import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blog.rheinenergie.com_6jw', ['https://blog.rheinenergie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
