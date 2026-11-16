import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.betway.co.bw/',
    'https://www.betway.co.zm/',
    'https://www.betway.com.gh/',
    'https://www.betway.co.tz/',
    'https://www.betway.com.ng/',
    'https://www.betway.co.mz/',
];

generateCMPTests('betway-africa', urls, { mobile: true });
generateCMPTests('betway-africa', urls, { mobile: false });
