import $ from 'jquery';
import _ from 'lodash';
import './body.css'

console.log('Init body');

$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");

let clicksCount = 0;
function updateCounter() {
    clicksCount += 1;
    $('#count').text(`${clicksCount} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 500);
$('button').on('click', debouncedUpdateCounter);
