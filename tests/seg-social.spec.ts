import generateCMPTests from '../playwright/runner';

const urls = ['https://sede.seg-social.gob.es/', 'https://www.seg-social.es/'];

generateCMPTests('seg-social', urls, { mobile: true });
generateCMPTests('seg-social', urls, { mobile: false });
