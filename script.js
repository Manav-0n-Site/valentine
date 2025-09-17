
        // Create floating hearts
        const heartsContainer = document.getElementById('hearts');
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heartsContainer.appendChild(heart);
        }

        // Preview button functionality
        const previewBtn = document.getElementById('previewBtn');
        const previewSection = document.getElementById('previewSection');
        const messagePreview = document.getElementById('messagePreview');
        const recipientInput = document.getElementById('recipient');
        const messageInput = document.getElementById('message');

        previewBtn.addEventListener('click', function() {
            const recipient = recipientInput.value || 'My Valentine';
            const message = messageInput.value || 'I just wanted to tell you how much you mean to me. Happy Valentine\'s Day!';
            
            messagePreview.innerHTML = `To my dearest ${recipient},<br><br>${message}<br><br>With all my love,<br>Your Valentine`;
            
            previewSection.style.display = 'block';
            
            // Smooth scroll to preview
            previewSection.scrollIntoView({ behavior: 'smooth' });
        });

        // Share buttons functionality
        document.getElementById('copyBtn').addEventListener('click', function() {
            const textToCopy = messagePreview.textContent;
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert('Message copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });

        document.getElementById('whatsappBtn').addEventListener('click', function() {
            const text = encodeURIComponent(messagePreview.textContent);
            window.open(`https://wa.me/?text=${text}`, '_blank');
        });

        document.getElementById('twitterBtn').addEventListener('click', function() {
            const text = encodeURIComponent(messagePreview.textContent);
            window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
        });