import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_careers.icrc.org_bg7', ['https://careers.icrc.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
