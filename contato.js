
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    const phoneNumber = '5511999999999';
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Nome:%20${encodeURIComponent(name)}%0AMensagem:%20${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
});
