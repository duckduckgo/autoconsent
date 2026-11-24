import generateCMPTests from '../playwright/runner';

generateCMPTests('visit-x.net', ['https://www.visit-x.net/'], { mobile: false });
generateCMPTests('visit-x.net', ['https://m.visit-x.net/'], { mobile: true });
