import './Guitar.css';
import { useEffect } from 'react';

function Guitar() {
    useEffect(() => {
        const resizeHandler = () => {
            const title = document.querySelector('#title');
            if (!title) return;

            const zoom = Math.round(window.devicePixelRatio * 100);
            const currentSize = parseInt(getComputedStyle(title).fontSize, 10);

            title.style.fontSize =
                zoom > 100 ? `${currentSize + (zoom % 100)}px` : `${currentSize + (100 % zoom)}px`;
        };

        window.addEventListener('resize', resizeHandler);

        // a-add kola kay para prevent memory leaks
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <div className="guitar-container">
            <div className="guitar-image-wrapper">
                <img src="/acoustic-guitar-portion.svg" alt="Acoustic Guitar" draggable="false"/>
            </div>
        </div>
    );
}

export default Guitar;

// TODO: Add strings on top of the guitar image
