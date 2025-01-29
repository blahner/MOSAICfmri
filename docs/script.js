document.addEventListener('DOMContentLoaded', () => {
    // FAQ functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const arrow = question.querySelector('.arrow');
            
            // Toggle answer visibility
            answer.classList.toggle('active');
            arrow.classList.toggle('active');
        });
    });
});