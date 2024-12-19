document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector('.preloader');
    const errorDiv = document.querySelector('.error');
    const commentsContainer = document.querySelector('.comments');

    const fetchComments = async () => {
        preloader.style.display = 'block';
        errorDiv.textContent = '';
        commentsContainer.innerHTML = '';

        try {
            // Случайная фильтрация: запрос комментариев с id от 100 и выше или от 200 и меньше
            const minId = Math.random() > 0.5 ? 100 : 200;
            const maxId = minId === 100 ? 500 : 199;
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            const comments = await response.json();
            const filteredComments = comments.filter(
                comment => comment.id >= minId && comment.id <= maxId
            );

            if (filteredComments.length === 0) {
                commentsContainer.innerHTML = `<p>No comments are found</p>`;
            } else {
                filteredComments.forEach(comment => {
                    const commentEl = document.createElement('div');
                    commentEl.className = 'comment';
                    commentEl.innerHTML = `
                        <h4>${comment.name} (${comment.email})</h4>
                        <p>${comment.body}</p>
                    `;
                    commentsContainer.appendChild(commentEl);
                });
            }
        } catch (error) {
            errorDiv.textContent = `⚠ Something went wrong: ${error.message}`;
        } finally {
            preloader.style.display = 'none';
        }
    };

    // Запуск запроса при загрузке страницы
    fetchComments();
});