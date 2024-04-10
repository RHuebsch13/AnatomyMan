// Import the function to test
const { updateFeedbackBox } = require('../feedback.js');

// Mock the document element
document.body.innerHTML = `
    <input type="text" id="ratingInput">
`;

describe('updateFeedbackBox function', () => {
    test('displays the correct rating text', () => {
        // Call the function with a rating
        updateFeedbackBox(3);

        // Check if the input value is updated correctly
        expect(document.getElementById('ratingInput').value).toBe('3 stars');
    });
});




