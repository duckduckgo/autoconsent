import generateCMPTests from '../playwright/runner';

const urls = ['https://www.taniomania.pl/', 'https://www.dzidziusiowo.pl/', 'https://www.ceneolokalnie.pl/', 'https://www.swiatdomu.com/'];

generateCMPTests('ceneo', urls, { mobile: true });
generateCMPTests('ceneo', urls, { mobile: false });
