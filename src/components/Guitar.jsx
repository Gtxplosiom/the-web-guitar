import './Guitar.css'

function Guitar() {
    window.addEventListener('resize', () => {
        let browserZoom = Math.round(window.devicePixelRatio * 100);
        let titleSize = document.querySelector('#title').style.fontSize;

        if (browserZoom > 100) {
            document.querySelector('#title').style.fontSize = titleSize + (browserZoom % 100);
        } else {
            document.querySelector('#title').style.fontSize = titleSize + (100 % browserZoom);
        }
    })

    return (
        <div className="guitar-container">
            <h1 id="title">The Web Guitar</h1>
            <img src="acoustic-guitar-portion.svg" alt="Acoustic Guitar"/>
        </div>
    );
}

export default Guitar
