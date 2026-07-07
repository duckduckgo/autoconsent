import generateCMPTests from '../playwright/runner';

const urls = ['https://www.aa.com/', 'https://www.envoyair.com/', 'https://www.psaairlines.com/'];

generateCMPTests('aa-cookie-banner', urls, { mobile: true });
generateCMPTests('aa-cookie-banner', urls, { mobile: false });
