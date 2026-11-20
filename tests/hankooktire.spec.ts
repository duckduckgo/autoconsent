import generateCMPTests from '../playwright/runner';

generateCMPTests('hankooktire.com', ['https://www.hankooktire.com/de/de/home.html', 'https://www.hankooktire.com/uk/en/home.html'], {
    testSelfTest: false,
});
