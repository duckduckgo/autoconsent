import generateCMPTests from '../playwright/runner';

const urls = ['https://www.mipro.com.tw/en'];

generateCMPTests('mipro', urls, { mobile: true });
generateCMPTests('mipro', urls, { mobile: false });
