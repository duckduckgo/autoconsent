import generateCMPTests from '../playwright/runner';

generateCMPTests('getproven', ['https://usv.getproven.com/auth', 'https://plus.squarepeg.vc/', 'https://directory.guaranteedirish.ie/'], {
    testSelfTest: false,
});
