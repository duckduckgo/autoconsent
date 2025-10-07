import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_chipsaway.co.uk_05r', ['https://www.chipsaway.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
