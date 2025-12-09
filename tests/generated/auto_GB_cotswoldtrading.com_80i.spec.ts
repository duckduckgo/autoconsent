import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cotswoldtrading.com_80i', ['https://www.cotswoldtrading.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
