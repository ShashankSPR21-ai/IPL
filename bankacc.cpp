#include <iostream>
#include <string>

using namespace std;

class BankAccount {
private:
    int accountNumber;
    string holderName;
    double balance;

public:
    // Default constructor
    BankAccount() {
        accountNumber = 0;
        holderName = "";
        balance = 0.0;
    }

    // Member function to assign values
    void setData(int accNum, string name, double initialBalance) {
        accountNumber = accNum;
        holderName = name;
        balance = initialBalance;
    }

    // Member function to deposit money
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Amount deposited successfully." << endl;
        } else {
            cout << "Invalid deposit amount." << endl;
        }
    }

    // Member function to withdraw money
    void withdraw(double amount) {
        if (amount > balance) {
            cout << "Insufficient balance." << endl;
        } else if (amount <= 0) {
            cout << "Invalid withdrawal amount." << endl;
        } else {
            balance -= amount;
            cout << "Amount withdrawn successfully." << endl;
        }
    }

    // Member function to display account details
    void display() const {
        cout << "\n--- Account Details ---" << endl;
        cout << "Account Number : " << accountNumber << endl;
        cout << "Holder Name    : " << holderName << endl;
        cout << "Current Balance: " << balance << endl;
    }

    // Destructor
    ~BankAccount() {
        cout << "Account object destroyed." << endl;
    }
};

int main() {
    int n;
    cout << "Enter the number of customers: ";
    cin >> n;

    // Create dynamic array of BankAccount objects
    BankAccount* accounts = new BankAccount[n];

    // Read details for each customer
    for (int i = 0; i < n; i++) {
        int accNum;
        string name;
        double initialBalance;

        cout << "\nEnter details for customer " << (i + 1) << ":" << endl;
        cout << "Enter Account Number: ";
        cin >> accNum;
        cin.ignore(); // Clear buffer for string input

        cout << "Enter Holder Name: ";
        getline(cin, name);

        cout << "Enter Initial Balance: ";
        cin >> initialBalance;

        accounts[i].setData(accNum, name, initialBalance);
    }

    // Display customer details
    cout << "\n==========================================" << endl;
    cout << "          CUSTOMER ACCOUNT DETAILS        " << endl;
    cout << "==========================================" << endl;
    for (int i = 0; i < n; i++) {
        accounts[i].display();
    }

    // Performing sample operations on the first account (if available)
    if (n > 0) {
        cout << "\n--- Testing Transactions on First Customer ---" << endl;
        double depAmt, withAmt;

        cout << "Enter amount to deposit into first account: ";
        cin >> depAmt;
        accounts[0].deposit(depAmt);

        cout << "Enter amount to withdraw from first account: ";
        cin >> withAmt;
        accounts[0].withdraw(withAmt);

        accounts[0].display();
    }

    // Free dynamically allocated memory (triggers destructors)
    cout << "\nDestroying account objects..." << endl;
    delete[] accounts;

    return 0;
}
