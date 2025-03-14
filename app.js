// Existing trade form functionality  
document.getElementById('trade-form').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent form submission  

    const pair = document.getElementById('crypto-pair').value;  
    const amount = document.getElementById('amount').value;  

    console.log(`Trading: ${amount} of ${pair}`);  
    alert(`Trade executed: ${amount} of ${pair}`);  
});  

// New face-to-face deal functionality  
document.getElementById('face-to-face-form').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent form submission  

    const f2fPair = document.getElementById('f2f-crypto-pair').value;  
    const f2fAmount = document.getElementById('f2f-amount').value;  
    const meetingLocation = document.getElementById('meeting-location').value;  

    // Gather selected payment methods  
    const paymentMethods = [];  
    const checkboxes = document.querySelectorAll('input[name="payment-method"]:checked');  
    checkboxes.forEach((checkbox) => {  
        paymentMethods.push(checkbox.value);  
    });  

    console.log(`Arranging face-to-face deal: ${f2fAmount} of ${f2fPair} at ${meetingLocation} via ${paymentMethods.join(', ')}`);  
    alert(`Face-to-Face deal arranged: ${f2fAmount} of ${f2fPair} at ${meetingLocation} via ${paymentMethods.join(', ')}`);  
});  
let currentChatOfferId = null;  

// Offer posting functionality  
document.getElementById('offer-form').addEventListener('submit', function (event) {  
    event.preventDefault(); // Prevent form submission  

    const offerType = document.getElementById('offer-type').value;  
    const offerPair = document.getElementById('offer-crypto-pair').value;  
    const offerPrice = document.getElementById('offer-price').value;  
    const offerLocation = document.getElementById('offer-location').value;  
    const offerPaymentMethod = document.getElementById('offer-payment-method').value;  

    const offersList = document.getElementById('offers');  
    const offerItem = document.createElement('li');  

    // Create an offer item  
    offerItem.innerHTML = `  
        ${offerType.charAt(0).toUpperCase() + offerType.slice(1)}: ${offerPair} at $${offerPrice}   
        (Payment Method: ${offerPaymentMethod}) - Location: ${offerLocation}  
        <button class='chat-button' data-offer='${offerPair}_${offerPrice}'   
        onclick='openChat("${offerPair}_${offerPrice}")'>Chat</button>  
    `;  

    offersList.appendChild(offerItem);  
    alert(`Offer posted: ${offerType} ${offerPair} at $${offerPrice}`);  

    // Reset the form fields after posting  
    document.getElementById('offer-form').reset();  
});  

// Function to open chat  
function openChat(offerId) {  
    currentChatOfferId = offerId; // Save the current offer ID for chatting  
    document.getElementById('chatModal').style.display = 'block';  
    document.getElementById('chat-messages').innerHTML = ''; // Clear previous messages  
}  

// Event listener for sending messages in the chat  
document.getElementById('chat-form').addEventListener('submit', function (event) {  
    event.preventDefault(); // Prevent form submission  
    
    const messageInput = document.getElementById('chat-message');  
    const message = messageInput.value;  

    // Append message to chat  
    const chatMessages = document.getElementById('chat-messages');  
    chatMessages.innerHTML += `<p>${message}</p>`;  
    
    // Clear input field  
    messageInput.value = '';  

    console.log(`Message sent in chat for ${currentChatOfferId}: ${message}`);  
});  

// Close chat functionality  
document.getElementById('close-chat').addEventListener('click', function () {  
    document.getElementById('chatModal').style.display = 'none';  
});  
// KYC form submission functionality  
document.getElementById('kyc-form').addEventListener('submit', function (event) {  
    event.preventDefault(); // Prevent form submission  

    const fullName = document.getElementById('full-name').value;  
    const email = document.getElementById('email').value;  
    const identityDocument = document.getElementById('identity-document').files[0];  
    const address = document.getElementById('address').value;  
    const phoneNumber = document.getElementById('phone').value;  

    // Simulate a verification request (In a real scenario, this would be a network request)  
    const status = document.getElementById('kyc-status');  

    // Simulate a delay for KYC processing  
    setTimeout(() => {  
        status.innerHTML = 'KYC Verification submitted successfully! We will review your documents and notify you via email.';  
        console.log(`KYC Submission:   
            Name: ${fullName},   
            Email: ${email},   
            Address: ${address},   
            Phone: ${phoneNumber},   
            Document: ${identityDocument.name}`);  
    }, 2000);  

    // Reset the form fields after submitting  
    document.getElementById('kyc-form').reset();  
});  
document.addEventListener('DOMContentLoaded', function () {  
    // Existing functionality...  

    // Add event listener for checking balance  
    document.getElementById('check-balance').addEventListener('click', function () {  
        const walletAddress = document.getElementById('wallet-address').value;  
        const selectedBlockchain = document.getElementById('blockchain-select').value;  

        // Placeholder function to simulate an API call to get wallet balance  
        getBalance(walletAddress, selectedBlockchain)  
            .then(balance => {  
                document.getElementById('wallet-balance').value = `${balance} ${selectedBlockchain}`;  
            })  
            .catch(err => {  
                alert('Error fetching balance: ' + err);  
            });  
    });  

    // Function to get the balance (mock function for this example)  
    function getBalance(address, blockchain) {  
        return new Promise((resolve, reject) => {  
            // Simulate a balance fetch  
            setTimeout(() => {  
                const dummyBalances = {  
                    BTC: '0.5',  
                    ETH: '1.2',  
                    BNB: '3.4',  
                    LTC: '0.8',  
                    XRP: '20',  
                };  
                if (dummyBalances[blockchain]) {  
                    resolve(dummyBalances[blockchain]);  
                } else {  
                    reject('Invalid blockchain selected.');  
                }  
            }, 1000);  
        });  
    }  

    // Add event listener for sending crypto  
    document.getElementById('send-crypto').addEventListener('click', function () {  
        document.getElementById('sendCryptoModal').style.display = 'block';  
    });  

    // Close send crypto modal  
    document.getElementById('close-send-modal').addEventListener('click', function () {  
        document.getElementById('sendCryptoModal').style.display = 'none';  
    });  

    // Send crypto form submission  
    document.getElementById('send-crypto-form').addEventListener('submit', function (event) {  
        event.preventDefault();  
        const recipientAddress = document.getElementById('recipient-address').value;  
        const amount = document.getElementById('amount').value;  
        const selectedBlockchain = document.getElementById('blockchain-select').value;  
        
        // Placeholder function to simulate sending crypto  
        sendCrypto(recipientAddress, amount, selectedBlockchain)  
            .then(() => {  
                alert(`Successfully sent ${amount} ${selectedBlockchain} to ${recipientAddress}`);  
                document.getElementById('sendCryptoModal').style.display = 'none';  
            })  
            .catch(err => {  
                alert('Error sending crypto: ' + err);  
            });  
    });  

    // Function to send crypto (mock function for this example)  
    function sendCrypto(address, amount, blockchain) {  
        return new Promise((resolve, reject) => {  
            // Simulate a send operation  
            setTimeout(() => {  
                if (amount > 0) {  
                    resolve();  
                } else {  
                    reject('Invalid amount.');  
                }  
            }, 1000);  
        });  
    }  

    // Existing functionality...  
});  