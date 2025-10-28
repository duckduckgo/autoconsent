import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nordicoutdoor.co.uk_2nf', ['https://www.nordicoutdoor.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
