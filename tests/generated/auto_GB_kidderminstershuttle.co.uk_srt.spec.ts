import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kidderminstershuttle.co.uk_srt', ['https://www.kidderminstershuttle.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
