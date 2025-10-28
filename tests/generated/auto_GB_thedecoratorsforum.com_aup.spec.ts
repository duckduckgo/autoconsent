import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thedecoratorsforum.com_aup', ['https://www.thedecoratorsforum.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
