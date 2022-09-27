import './Knapp.css';

function ActionKnapp() {
    return (
        <div className='rad'>
            <div className='knapperom'>
                <button className='action'>klikk meg</button>
            </div>
            <div className='beskrivelse'>
                <h2>Action</h2>
                <p>Denne knappen har litt ekstra OMPH!.</p>
            </div>
        </div>
    );
}

export default ActionKnapp;
