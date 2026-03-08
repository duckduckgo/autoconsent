import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_basharfrequencies.com_jp7', ['https://basharfrequencies.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
