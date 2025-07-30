import './Guitar.css';

const Guitar = () => {
    // pamati ko mas guds kun i-papass an id didi?
    // TODO: apply karplus here
    const pluck = (string) => {
        console.log(`plucked ${string}`)
    }

    // TODO: hardcoding here is ugly as f**k. make string hitbox "magnetic"
    return (
        <div className="guitar-container">
            <div className="guitar-image-wrapper">
                <img src="/acoustic-guitar-portion.svg" alt="Acoustic Guitar" draggable="false"/>
                <div className="guitar-string" id="low E" style={{ top: '45.5%' }} onClick={() => pluck("low E")}></div>
                <div className="guitar-string" id="A" style={{ top: '47.5%' }} onClick={() => pluck("A")}></div>
                <div className="guitar-string" id="D" style={{ top: '49.5%' }} onClick={() => pluck("D")}></div>
                <div className="guitar-string" id="G" style={{ top: '51.5%' }} onClick={() => pluck("G")}></div>
                <div className="guitar-string" id="B" style={{ top: '53.5%' }} onClick={() => pluck("B")}></div>
                <div className="guitar-string" id="high E" style={{ top: '55.5%' }} onClick={() => pluck("high E")}></div>
            </div>
        </div>
    );
}

export default Guitar;
