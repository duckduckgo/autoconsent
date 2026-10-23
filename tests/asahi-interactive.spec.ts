import generateCMPTests from '../playwright/runner';

const urls = ['https://www.cnn.co.jp/', 'https://japan.cnet.com/', 'https://japan.zdnet.com/', 'https://aiasahi.jp/'];

generateCMPTests('asahi-interactive', urls, { mobile: true });
generateCMPTests('asahi-interactive', urls, { mobile: false });
