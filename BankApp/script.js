class BankAccount {
    constructor(ownerName, initialBalance = 0) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited ${amount} taka. New balance: ${this.balance} taka.`;
        } else {
            return "Invalid deposit amount.";
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew ${amount} taka. New balance: ${this.balance} taka.`;
        } else {
            return "Insufficient funds or invalid withdrawal amount.";
        }
    }

    getBalance() {
        return `Balance for ${this.ownerName}: ${this.balance} taka.`;
    }
}

let account;

function deposit() {
    const ownerName = document.getElementById("ownerName").value;
    const amount = parseFloat(document.getElementById("amount").value);
    if (!account) {
        account = new BankAccount(ownerName, amount);
    } else {
        document.getElementById("output").innerText = account.deposit(amount);
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!account) {
        document.getElementById("output").innerText = "Please deposit first.";
    } else {
        document.getElementById("output").innerText = account.withdraw(amount);
    }
}

function checkBalance() {
    if (!account) {
        document.getElementById("output").innerText = "No account exists.";
    } else {
        document.getElementById("output").innerText = account.getBalance();
    }
}