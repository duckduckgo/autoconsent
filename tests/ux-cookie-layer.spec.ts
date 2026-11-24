import generateCMPTests from '../playwright/runner';

const urls = ['https://www.trumpf.com/', 'https://www.trumpf-scientific-lasers.com/'];

generateCMPTests('ux-cookie-layer', urls, { mobile: true, testSelfTest: false });
generateCMPTests('ux-cookie-layer', urls, { mobile: false, testSelfTest: false });
