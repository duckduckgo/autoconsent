import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thesewingstudio.co.uk_x1b', ['https://www.thesewingstudio.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
