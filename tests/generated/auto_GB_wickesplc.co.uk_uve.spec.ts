import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wickesplc.co.uk_uve', ['https://www.wickesplc.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
