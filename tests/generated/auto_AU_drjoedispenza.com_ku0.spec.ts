import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_drjoedispenza.com_ku0', ['https://drjoedispenza.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
