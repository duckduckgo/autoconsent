import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_beanwealth.com_avt', ['https://beanwealth.com/p/warren-buffett-s-favorite-investment-metric'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
