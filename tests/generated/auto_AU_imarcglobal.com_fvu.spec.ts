import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_imarcglobal.com_fvu', ['https://imarcglobal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
