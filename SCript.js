document.addEventListener('DOMContentLoaded', () => {
    const videoListSection = document.getElementById('video-list');
    const videoPlayerIframe = document.querySelector('#video-player iframe');
    const uploadForm = document.getElementById('upload-form');
    const publishButton = document.getElementById('publish-button');
    const uploadMessage = document.getElementById('upload-message');

    // Evento para cambiar el video al hacer clic en un video sugerido
    videoListSection.addEventListener('click', (event) => {
        const link = event.target.closest('a');
        if (link && link.dataset.videoUrl) {
            event.preventDefault();
            videoPlayerIframe.src = link.dataset.videoUrl;
        }
    });

    // Simulación de la publicación de un video
    if (publishButton) {
        publishButton.addEventListener('click', () => {
            const videoTitle = document.getElementById('video-title').value;
            const videoUrl = document.getElementById('video-url').value;

            if (videoTitle && videoUrl.includes('embed')) {
                // Aquí en una aplicación real, se enviaría esta información a un servidor
                console.log(`Se "publicó" el video: ${videoTitle} con URL: ${videoUrl}`);
                uploadForm.style.display = 'none';
                uploadMessage.style.display = 'block';

                // Opcional: Podrías agregar dinámicamente el nuevo video a la lista de sugeridos (solo visualmente)
                const newVideoItem = document.createElement('div');
                newVideoItem.classList.add('video-item');
                newVideoItem.innerHTML = `
                    <a href="#" data-video-url="${videoUrl}">
                        <img src="http://via.placeholder.com/160x90/808080/FFFFFF?Text=Nuevo+Video" alt="${videoTitle}">
                        <h3>${videoTitle}</h3>
                        <p>Video recién "publicado".</p>
                    </a>
                `;
                videoListSection.appendChild(newVideoItem);

                // Reiniciar el formulario después de un tiempo (solo visual)
                setTimeout(() => {
                    uploadForm.reset();
                    uploadForm.style.display = 'block';
                    uploadMessage.style.display = 'none';
                }, 3000);
            } else {
                alert('Por favor, introduce un título y una URL de inserción de YouTube válida.');
            }
        });
    }
});
