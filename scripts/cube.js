class InteractiveCube {
    constructor() {
        console.log('InteractiveCube initializing...');
        this.cube = document.querySelector('.cube');
        
        if (!this.cube) {
            console.error('Cube element not found!');
            return;
        }
        
        console.log('Cube element found:', this.cube);
        
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.currentRotationX = 0;
        this.currentRotationY = 0;
        this.autoRotationPaused = false;
        this.dragTimeout = null;
        
        this.init();
    }
    
    init() {
        console.log('Adding event listeners...');
        // Add mouse event listeners
        this.cube.addEventListener('mousedown', this.onMouseDown.bind(this));
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
        
        // Add touch event listeners for mobile
        this.cube.addEventListener('touchstart', this.onTouchStart.bind(this));
        document.addEventListener('touchmove', this.onTouchMove.bind(this));
        document.addEventListener('touchend', this.onTouchEnd.bind(this));
        
        // Prevent default drag behavior
        this.cube.addEventListener('dragstart', (e) => e.preventDefault());
        
        console.log('Event listeners added successfully');
    }
    
    onMouseDown(e) {
        console.log('Mouse down detected');
        this.startDrag(e.clientX, e.clientY);
    }
    
    onTouchStart(e) {
        console.log('Touch start detected');
        e.preventDefault();
        const touch = e.touches[0];
        this.startDrag(touch.clientX, touch.clientY);
    }
    
    startDrag(x, y) {
        console.log('Starting drag at:', x, y);
        this.isDragging = true;
        this.startX = x;
        this.startY = y;
        
        // Pause auto rotation
        this.cube.style.animation = 'none'; // Completely disable CSS animation
        this.autoRotationPaused = true;
        console.log('Animation paused');
        
        // Clear any existing timeout
        if (this.dragTimeout) {
            clearTimeout(this.dragTimeout);
        }
        
        // Change cursor
        this.cube.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    }
    
    onMouseMove(e) {
        if (this.isDragging) {
            this.handleDrag(e.clientX, e.clientY);
        }
    }
    
    onTouchMove(e) {
        if (this.isDragging) {
            e.preventDefault();
            const touch = e.touches[0];
            this.handleDrag(touch.clientX, touch.clientY);
        }
    }
    
    handleDrag(x, y) {
        const deltaX = x - this.startX;
        const deltaY = y - this.startY;
        
        // Convert mouse movement to rotation
        const rotationSpeed = 0.5;
        this.currentRotationY += deltaX * rotationSpeed;
        this.currentRotationX -= deltaY * rotationSpeed;
        
        console.log(`Rotation: X=${this.currentRotationX}deg, Y=${this.currentRotationY}deg`);
        
        // Apply the rotation - this is the key fix
        this.cube.style.transform = `rotateX(${this.currentRotationX}deg) rotateY(${this.currentRotationY}deg)`;
        this.cube.style.animation = 'none'; // Disable CSS animation while dragging
        
        // Update start position for next movement
        this.startX = x;
        this.startY = y;
    }
    
    onMouseUp() {
        this.endDrag();
    }
    
    onTouchEnd() {
        this.endDrag();
    }
    
    endDrag() {
        if (!this.isDragging) return;
        
        this.isDragging = false;
        this.cube.style.cursor = 'grab';
        document.body.style.userSelect = '';
        
        // Resume auto rotation after 2 seconds of inactivity
        this.dragTimeout = setTimeout(() => {
            this.resumeAutoRotation();
        }, 2000);
    }
    
    resumeAutoRotation() {
        console.log('Resuming auto rotation');
        // Reset to auto rotation
        this.cube.style.transform = '';
        this.cube.style.animation = 'rotate 20s infinite linear'; // Restore CSS animation
        this.cube.style.animationPlayState = 'running';
        this.autoRotationPaused = false;
        this.currentRotationX = 0;
        this.currentRotationY = 0;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing cube...');
    new InteractiveCube();
});

// Also try initializing when window loads as backup
window.addEventListener('load', () => {
    console.log('Window loaded');
    if (!document.querySelector('.interactive-cube-initialized')) {
        console.log('Initializing as backup...');
        const cube = new InteractiveCube();
        if (cube.cube) {
            cube.cube.classList.add('interactive-cube-initialized');
        }
    }
});
