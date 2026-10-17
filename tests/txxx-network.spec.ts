import generateCMPTests from '../playwright/runner';

const urls = ['https://vjav.com/', 'https://hclips.com/', 'https://tubepornclassic.com/', 'https://pornl.com/', 'https://ooxxx.com/'];

generateCMPTests('txxx-network', urls, { mobile: true });
generateCMPTests('txxx-network', urls, { mobile: false });
