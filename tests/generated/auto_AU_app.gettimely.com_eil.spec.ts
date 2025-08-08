import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_app.gettimely.com_eil', ['https://app.gettimely.com/Account/Login?ReturnUrl=%2fcalendar'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
