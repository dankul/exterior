import 'inputmask/dist/jquery.inputmask.min';
import './accordions';
import './header';
import './more';
import './services';
import './sliders';

$(document).ready(function () {
    $("#phoneNumber").inputmask("+1 ___-___-____");
});