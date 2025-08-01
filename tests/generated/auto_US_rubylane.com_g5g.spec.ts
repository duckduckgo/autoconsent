import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_US_rubylane.com_g5g',
    ['https://www.rubylane.com/ni/ajax/tp_widget.tcl?csrf=506DaKuymOQJPVHGYBEarMMexM8oZlR43QeD4oc%3D&loc=footer&type=rl'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] },
);
