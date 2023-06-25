🔹 Project 2: Smart Contract Project - AkdenizLotto
Department of Computer Engineering (CSE424)
Akdeniz University
Antalya, Turkey

# 📝 Abstract
This report presents the development and implementation of a crypto-lottery decentralized application (DApp) using Matic Blockchain and TypeScript. The DApp allows users to purchase lottery tickets using MATIC cryptocurrency and participate in regular lottery draws. The system leverages Solidity smart contracts deployed on the Matic Blockchain, with the frontend developed using Next.js and React.js. The integration with MetaMask provides secure wallet transactions, and TailwindCSS ensures a responsive and visually appealing user interface. The report discusses the system architecture, user journey, testing and quality assurance measures, and proposes future enhancements. The crypto-lottery DApp offers a seamless and transparent platform for users to engage in lottery activities while providing the admin with full control and commission earnings. The report highlights the technological stack, design decisions, and outlines the potential for further development and improvement in terms of additional cryptocurrency integrations, enhanced security measures, and scalability optimizations.

# Project Login Page 

![image](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/0a83eb77-166b-40ae-81d3-1daf812ba17a)

# Admin Login

![image](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/8b632249-cd29-49a5-bdb6-87071ed3bf8e)

## 🔸 I. INTRODUCTION
### 📌 A. Purpose
The purpose of this project is to develop a Next.js web application for a crypto-lottery, allowing users to purchase tickets using the MATIC cryptocurrency and participate in the lottery. The backend is implemented using Solidity smart contracts, and the functionality is connected using thirdweb servers. The transactions are registered on the MATIC Mumbai test-net to prevent real currency transactions, ensuring a safe and controlled environment.

### 📌 B. Problem Statement
Traditional lotteries rely on centralized authorities and often charge significant commissions to ensure player security. Additionally, verifying results and detecting fraudulent behavior can be challenging. Therefore, this project seeks to address these issues by utilizing blockchain technology.

### 📌 C. Analysis of Existing Solutions
Traditional lotteries are governed by centralized authorities, requiring players to trust these entities for security. However, this centralized structure can lead to security vulnerabilities and fraudulent activities. A blockchain-based solution has the potential to eliminate these issues.

### 📌 D. Smart Contract-Based Solution
In this project, a smart contract-based lottery system is being developed using the Ethereum blockchain platform. The smart contract automates lottery transactions and ensures secure interactions among players. It manages lottery initiation, result determination, and payment distribution.

### 📌 E. Smart Contract Design and Implementation
The smart contract is designed using the Solidity programming language and deployed on the Ethereum Virtual Machine (EVM). It tracks player participation, bet amounts, generates random numbers, determines winners, and facilitates automatic payments. The contract also incorporates security measures to mitigate potential vulnerabilities and attacks.

### 📌 F. Testing and Evaluation
Comprehensive testing is conducted to ensure the accurate functioning and reliability of the smart contract. Tests cover various scenarios and usage cases. The contract is designed with scalability and performance optimization in mind. It undergoes security testing to identify and address potential vulnerabilities.

🔹 II. TECHNOLOGIES USED
### 📌 A. Matic Blockchain
The Matic Blockchain is utilized to store data in block hashes from the genesis block to the end block, providing a secure and decentralized platform for the lottery application.

### 📌 B. Solidity
Solidity programming language is used to develop the smart contracts that govern the lottery operations, including ticket purchases, winner selection, and commission management.

### 📌 C. Thirdweb
Thirdweb is a framework and SDK used to deploy and connect the blockchain functionality to the frontend of the application, enabling seamless interaction between the user interface and the smart contracts.

# Thirdweb

![image](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/85bd52e3-79a3-45be-9c0c-921659f6fbe4)

# Thirweb Write Function

![image](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/75eea938-59d8-4eb2-9f59-46859072bfbe)

# Thirweb Read Function

![image](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/268576e4-0352-457e-a3ca-1e77fda4a8bd)


### 📌 D. Metamask
Metamask is a decentralized wallet used for transactions within the crypto-lottery application, providing a secure and user-friendly interface for users to interact with the blockchain.

### 📌 E. TypeScript
TypeScript is utilized to ensure error-free and robust code development, enhancing the reliability and maintainability of the lottery application.

### 📌 F. Next.js
Next.js framework is employed for frontend development, enabling the creation of a complete user interface with enhanced performance and scalability.

### 📌 G. React.js
React.js library is utilized within the Next.js framework to incorporate additional UI components such as hot-toast, spinners, and countdown timers, enhancing the user experience.

### 📌 H. TailwindCSS
TailwindCSS is used for styling the web application, providing a responsive and visually appealing design.

## 🔸 III. PROJECT OVERVIEW
### 📌 A. Stack Used
The project is built using a stack comprising Next.js and Vercel for quick start and deployment, React.js for the user interface, TypeScript and JavaScript for typing, TailwindCSS for styling, Solidity for smart contracts, and Thirdweb for deploying the smart contract.

### 📌 B. Project Technological Stack
The project utilizes Next.js and Vercel for quick setup and deployment, React.js for the user interface development, TypeScript and JavaScript for typing and code logic, TailwindCSS for styling the web application, Solidity for smart contract development, and Thirdweb for deploying and connecting the smart contract to the frontend.

🔹 IV. SMART CONTRACT
### 📌 A. Solidity Code Overview
The provided Solidity code represents the smart contract for the lottery. It includes functions for purchasing tickets, drawing the winner, restarting the draw, checking winnings, withdrawing winnings, refunding tickets, and managing commission. The code ensures fairness and randomness in selecting the winner while providing necessary control mechanisms for the admin.

## 🔸 V. LOTTERY DAPP FEATURES
### 📌 A. Login and Logout using MetaMask
The DApp includes a login and logout feature integrated with MetaMask, allowing users to securely authenticate themselves using their MetaMask wallets to access the lottery application.

### 📌 B. Admin Control

- Draw Winner: The admin has the authority to draw the winner of the lottery by executing the DrawWinnerTicket function. This function selects a random winning ticket from the purchased tickets, updates the winner's address, and calculates the winnings based on the ticket price and commission.
- Withdraw Commission: The admin can withdraw the accumulated commission from the lottery by invoking the WithdrawCommission function. This transfers the total commission balance to the admin's address, providing a mechanism to earn revenue from ticket sales.
- Restart Draw: In case the draw is completed or no tickets were purchased, the admin can restart the draw by executing the restartDraw function. This clears the existing tickets and sets a new expiration timestamp for the next draw.
- Refund Lottery Ticket Charges: If the lottery expires and no winner is drawn, the admin can refund the purchased ticket charges to all participants. The RefundAll function iterates through the tickets array, transferring the ticket price back to each participant.

# Buying Ticket

![image](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/4a998ded-cd05-4a09-970b-6f9da3b45033)

# User Login

![image](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/8b8bc6ad-dc3f-42ce-a491-de8a002600b4)

# All Transactions from Admin

![image](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/d5ec95f1-10af-44e4-bb5e-9e111ba8f84f)

### 📌 C. Smart Contract Deployment on Matic Blockchain
The smart contract is deployed on the Matic Blockchain using Thirdweb. This ensures the execution of the lottery logic on a secure and scalable blockchain network.

🔹 VI. FRONT-END IMPLEMENTATION
### 📌 A. Next.js and Vercel
Next.js and Vercel are used for the front-end implementation, enabling rapid development and easy deployment of the lottery application. Next.js provides server-side rendering capabilities, enhancing performance and SEO optimization.

### 📌 B. React.js
React.js is employed for developing the user interface components of the lottery DApp, leveraging its component-based architecture and virtual DOM for efficient rendering and UI management.

### 📌 C. TypeScript and JavaScript
TypeScript and JavaScript are utilized for writing the front-end code, ensuring type safety and error prevention. These programming languages enhance code readability, maintainability, and developer productivity.

### 📌 D. TailwindCSS
TailwindCSS is used for styling the lottery DApp, providing a utility-first CSS framework that facilitates rapid UI development and customization. It enables the creation of a responsive and visually appealing interface.

## 🔸 VII. SYSTEM ARCHITECTURE
### 📌 A. High-Level Overview
The system architecture of the crypto-lottery DApp consists of multiple components that work together to provide a seamless user experience. These components include the front-end user interface, the smart contract deployed on the Matic Blockchain, the backend functionality implemented in Solidity, and the integration with MetaMask for secure wallet transactions. The flow of data and interactions between these components ensures the smooth operation of the crypto-lottery.

🔹 VIII. SYSTEM FEATURES
### 📌 A. Creating Account:
To participate in the lottery and access its features, users need to create an account by following these steps:
Priority: HIGH
Stimulus/Response Sequences:

- User visits the lottery website and clicks on the "Sign Up" button.
- User provides the necessary personal information and completes the registration form.
- User clicks on the "Create Account" button.
- The system verifies the user's information and creates their account.
- The system assigns a unique account ID to the user for future identification.
Functional Requirements:
FR1: User Registration
Description: Users should be able to register for an account on the lottery website by providing personal information and completing the registration process.
Rationale: This feature allows users to participate in the lottery and access the system's functionalities.
Dependencies: None
### 📌 B. Buying Lottery Tickets:
Users should be able to purchase lottery tickets using the designated cryptocurrency (MATIC) on the lottery website.
Priority: HIGH
Stimulus/Response Sequences:

- User logs into their account on the lottery website.
- User navigates to the "Buy Tickets" section.
- User selects the desired number of tickets to purchase.
- User confirms the purchase and authorizes the transaction using their connected cryptocurrency wallet (e.g., MetaMask).
- The system deducts the ticket price from the user's account balance.
- The system generates the purchased ticket(s) and assigns them to the user's account.
Functional Requirements:
FR1: Ticket Purchase
Description: Users should be able to purchase lottery tickets using the designated cryptocurrency (MATIC) on the lottery website.
Rationale: Ticket purchase is the primary action for users to participate in the lottery and have a chance to win.
Dependencies: Account Management - FR2
### 📌 C. Drawing the Lottery Winner:
The lottery admin should be able to draw the winner(s) of the lottery at the specified time interval.
Priority: HIGH
Stimulus/Response Sequences:
- Admin logs into their admin account on the lottery website.
- Admin navigates to the "Draw Winner" section.
- Admin initiates the draw process.
- The system randomly selects the winning ticket from the purchased tickets.
- The system identifies the user associated with the winning ticket as the winner of the lottery.
- The system calculates and displays the winnings for the winner.
Functional Requirements:
FR1: Draw Winner
Description: The lottery admin should have the ability to draw the winner(s) of the lottery at the specified time interval.
Rationale: Drawing the winner determines the outcome of the lottery and distributes the winnings accordingly.
Dependencies: Account Management - FR2 (for admin account)
### 📌 D. Commission Withdrawal:
The lottery admin should be able to withdraw the commission earned from the lottery ticket sales.
Priority: MEDIUM
Stimulus/Response Sequences:

- Admin logs into their admin account on the lottery website.
- Admin navigates to the "Commission" section.
- Admin initiates the withdrawal process for the earned commission.
- The system transfers the commission amount to the admin's designated cryptocurrency wallet.
- The system updates the admin's account balance and transaction history.
Functional Requirements:
FR1: Commission Withdrawal
Description: The lottery admin should have the ability to withdraw the commission earned from the lottery ticket sales.
Rationale: Commission withdrawal allows the admin to receive their earnings from operating the lottery.
Dependencies: Account Management - FR2 (for admin account)
### 📌 E. Ticket Refund:
The lottery admin should be able to refund all the purchased tickets and return the ticket prices to the respective users.
Priority: MEDIUM
Stimulus/Response Sequences:

- Admin logs into their admin account on the lottery website.
- Admin navigates to the "Ticket Refund" section.
- Admin initiates the refund process for all purchased tickets.
- The system refunds the ticket prices to the respective users' accounts.
- The system updates the users' account balances and transaction histories.
Functional Requirements:
FR1: Ticket Refund
Description: The lottery admin should have the ability to refund all the purchased tickets and return the ticket prices to the respective users.
Rationale: Ticket refund provides a mechanism for resolving issues or canceling the lottery if necessary.
Dependencies: Account Management - FR2 (for admin account)
## 🔸 IX. USER JOURNEY
### 📌 A. User Registration and MetaMask Integration
To participate in the crypto-lottery, users first need to register and connect their MetaMask wallets to the DApp. This process involves installing the MetaMask extension, creating a wallet, and securely connecting it to the DApp.

### 📌 B. Ticket Purchase
After registration, users can browse the available lotteries and purchase tickets using their MATIC cryptocurrency. The BuyTickets function in the smart contract facilitates the purchase by deducting the ticket price from the user's wallet and adding their address to the tickets array.

### 📌 C. Lottery Draw
Once the lottery duration expires, the admin can trigger the DrawWinnerTicket function to select a random winning ticket. The smart contract calculates the winnings for the winner, updates the lastWinner and lastWinnerAmount variables, and transfers the winnings to the winner's address.

### 📌 D. Withdrawal and Refunds
Winners can withdraw their winnings by invoking the WithdrawWinnings function, which transfers the corresponding amount from the smart contract to the winner's address. In the case of an expired lottery with no winner, the admin can refund the ticket charges to all participants using the RefundAll function.

### 📌 E. Admin Dashboard
The admin has access to a dedicated dashboard where they can monitor the lottery status, view the total commission earned, and perform administrative tasks such as drawing the winner, restarting the draw, and withdrawing commission. This dashboard provides comprehensive control and management capabilities for the admin.

🔹 X. TESTING AND QUALITY ASSURANCE
### 📌 A. Test Cases
A set of test cases were created and executed to ensure the correctness and reliability of the crypto-lottery DApp. These test cases cover various scenarios such as ticket purchase, winner selection, commission calculation, withdrawal, and refund processes. The tests were designed to validate the expected behavior of the smart contract and ensure that it functions as intended.

### 📌 B. Code Review and Bug Fixing
The codebase underwent thorough code review to identify any potential issues, bugs, or vulnerabilities. Identified issues were addressed promptly through bug fixing and code improvements to enhance the stability and security of the crypto-lottery DApp.

![1](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/e5c38581-d0c0-423c-b8b0-1b0b52e32136)

BuyTickets() function:

This function allows users to purchase tickets.
Example: When a user wants to buy 10 tickets worth 0.1 ether, the function is called.
Result: The user's tickets are purchased and added to the ticket list.

![2](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/58580be0-8d4e-4073-8d8a-738166671a1a)

DrawWinnerTicket() function:

This function randomly selects the winning ticket.
Example: When the function is called, a random ticket is selected.
Result: The owner of the winning ticket is determined, the winning amount is updated, and the ticket list is cleared.

![3](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/66848f7d-6094-44b0-a8af-ce597637ba5f)

WithdrawWinnings() function:

This function allows users to withdraw their winnings.
Example: A winning user calls this function to withdraw their winnings.
Result: The winning amount is transferred to the user's account, and the winnings are set to zero.

![4](https://github.com/KurtC0bainn/akdeniz-lotto-dapp/assets/79340463/c0aa053b-3219-430b-a5a2-8d8bbd4c0392)

RefundAll() function:

This function refunds the ticket prices before the lottery expiration.
Example: When the lottery expiration time is reached, the function is called, and the ticket prices are refunded.
Result: The ticket prices are returned to the ticket holders' accounts, and the ticket list is cleared.

### 📌 C. User Acceptance Testing
User acceptance testing was conducted to gather feedback from real users and ensure that the DApp meets their expectations in terms of functionality, usability, and performance. Feedback from users was used to further refine and enhance the DApp's features and user experience.

## 🔸 XI. FUTURE ENHANCEMENTS
### 📌 A. Integration with Additional Cryptocurrencies
In future iterations of the crypto-lottery DApp, support for multiple cryptocurrencies could be added, allowing users to purchase tickets using a wider range of digital currencies.

### 📌 B. Improved User Interface
The user interface could be further enhanced with additional visual elements, animations, and interactive features to create a more engaging and visually appealing experience for users.

### 📌 C. Enhanced Security Measures
To bolster the security of the DApp, additional security measures such as multi-factor authentication, encryption, and secure wallet integration protocols could be implemented.

### 📌 D. Scalability and Performance Optimization
As the user base and ticket sales grow, the DApp's scalability and performance could be optimized by implementing strategies such as sharding, load balancing, and caching mechanisms to handle increased traffic and ensure smooth operation.

🔹 XII. CONCLUSION
In conclusion, the developed Crypto Lottery DApp utilizes the Matic Blockchain, Solidity smart contracts, and various web technologies to create an interactive and secure platform for users to participate in lotteries using cryptocurrency. The combination of Next.js, React.js, TypeScript, and TailwindCSS ensures a robust and user-friendly web application. The smart contract's functionality enables fair lottery draws, admin control, commission management, and user interactions, providing an engaging and reliable experience for lottery participants.
