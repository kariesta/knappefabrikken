import './Knapp.css';

function GhostKnapp() {
    return (
        <div className='rad'>
            <div className='knapperom'>
                <button className='ghost'>klikk meg</button>
            </div>
            <div className='beskrivelse'>
                <h2>Ghost</h2>
                <p>Denne knappen er usynlig inntil du finner den.</p>
            </div>
        </div>
    );
}

export default GhostKnapp;
