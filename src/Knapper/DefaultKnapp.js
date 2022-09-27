import './Knapp.css';

function DefaultKnapp() {
  return (
    <div className='rad'>
      <div className='knapperom'>
        <button>klikk meg</button>
      </div>
      <div className='beskrivelse'>
        <h2>Default</h2>
        <p>Dette er defaultknappen i react uten noe ekstra styling.</p>
      </div>
    </div>
  );
}

export default DefaultKnapp;
