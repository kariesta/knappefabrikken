import './Knapp.css';

function SimpleKnapp() {
  return (
    <div className='rad'>
      <div className='knapperom'>
        <button className='simple'>klikk meg</button>
      </div>
      <div className='beskrivelse'>
        <h2>Simple</h2>
        <p>Dette er en litt finere knapp.</p>
      </div>
    </div>
  );
}

export default SimpleKnapp;
