import $ from "jquery";
import _ from 'lodash';
import '../css/main.css';

let clicksCount = 0;

function updateCounter() {
    clicksCount += 1;
    $('#count').text(`${clicksCount} clicks on the button`);
}

$('body').append('<div id="logo"></div>')
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

const debouncedUpdateCounter = _.debounce(updateCounter, 500);
$('button').on('click', debouncedUpdateCounter);
