import generateCMPTests from '../playwright/runner';

const urls = ['https://www.la7.it/', 'https://tg.la7.it/'];

// The CMP reloads the page as soon as consent is stored, which races the self test.
generateCMPTests('cmp-rcs', urls, { mobile: true, testSelfTest: false });
generateCMPTests('cmp-rcs', urls, { mobile: false, testSelfTest: false });
