// Task 1: Write a function to generate an attendee badge given a name and a role (e.g., "speaker," "attendee").

function generateBadge(name, role) {
    return `Name: ${name}, Role: ${role}`;
}

console.log(generateBadge("Alice", "Speaker"));
console.log(generateBadge("Kevin","Attendee"));
console.log(generateBadge("Bob", "Guard"));

// Task 2: Write a function to calculate the total cost of the event given the number of attendees and the cost per attendee. If the number of attendees exceeds 100, apply a 10% discount to the total cost.

//     Example Input: calculateCost(120, 25)
//     Example Output: 2700

function calculateCost(numberOfAttendees, costPerAttendee){
    let total = numberOfAttendees * costPerAttendee;
    if (numberOfAttendees > 100) {
        total = total * 0.9
    }
    else {total}
        return total
}

console.log(calculateCost(101, 1));
console.log(calculateCost(99, 1));
console.log(calculateCost(200, 20));

// Task 3: Write a function to validate email addresses for attendee registrations. The function should return true if the email contains "@" and ".", and false otherwise.

function validateEmailAddress(emailAddress) {
    return emailAddress.includes("@") && emailAddress.includes(".");
};

console.log(validateEmailAddress("name@gmail.com"));
console.log(validateEmailAddress("namegmail.com"));
console.log(validateEmailAddress("name@gmailcom"));