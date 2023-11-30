// test

class Greeters {
    greeting: string;

    // Constructor to initialize the greeting property
    constructor(message: string) {
        this.greeting = message;
    }

    // Method that greets a person
    greet(name: string): string {
        return `Hello, ${name}! ${this.greeting}`;
    }
}

// Create an instance of the Greeter class
const greeters = new Greeter("Welcome to TypeScript");

// Call the greet method
const greetingMessages = greeter.greet("John");

// Log the greeting message to the console
console.log(greetingMessage);
