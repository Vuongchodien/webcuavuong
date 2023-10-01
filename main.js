const videoElement = document.getElementById('live-video');

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error accessing camera:', error);
    }
}

startCamera();
