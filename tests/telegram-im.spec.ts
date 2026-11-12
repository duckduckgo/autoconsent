import generateCMPTests from '../playwright/runner';

const urls = ['http://telegram.im/', 'https://telegramcn.org.cn/', 'https://telegramim.ru/'];

generateCMPTests('telegram-im', urls, { mobile: true });
generateCMPTests('telegram-im', urls, { mobile: false });
