import generateCMPTests from '../playwright/runner';

generateCMPTests('united-online', ['https://my.juno.com/start/sp.do', 'https://my.netzero.net/start/sp.do'], { mobile: false });
generateCMPTests('united-online', ['https://webmail.juno.com/', 'https://webmail.netzero.net/'], { mobile: true });
