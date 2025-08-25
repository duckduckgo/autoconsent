import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ubs-kidscup.ch_5oc', ['https://www.ubs-kidscup.ch/de/fuer-teilnehmer/startmoeglichkeiten?directlink=en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
