import generateCMPTests from '../playwright/runner';

const urls = ['https://g1.globo.com/', 'https://ge.globo.com/', 'https://gshow.globo.com/', 'https://oglobo.globo.com/'];

generateCMPTests('globo-lgpd', urls, { mobile: true });
generateCMPTests('globo-lgpd', urls, { mobile: false });
