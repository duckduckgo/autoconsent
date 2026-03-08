import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_briantsofrisborough.co.uk_p97', ['https://briantsofrisborough.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
