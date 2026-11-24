import generateCMPTests from '../playwright/runner';

generateCMPTests('gdpr-jp-notice', ['https://www.nact.jp/', 'https://www.nmwa.go.jp/', 'https://www.tmch.or.jp/']);
