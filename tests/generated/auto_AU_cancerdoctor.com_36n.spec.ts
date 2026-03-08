import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cancerdoctor.com_36n', ['https://cancerdoctor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
