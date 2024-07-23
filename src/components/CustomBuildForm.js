import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const GuitarForm = () => {
  const [formData, setFormData] = useState({
    to_name: 'Kevin',
    name: '',
    email: '',
    instrument: '',
    bodyStyle: '',
    bodyStyleOther: '',
    headstockStyle: '',
    headstockStyleOther: '',
    neckJoint: '',
    numStrings: '',
    dexterity: '',
    neckProfile: '',
    neckProfileOther: '',
    bodyWood: '',
    bodyWoodOther: '',
    neckWood: '',
    neckWoodOther: '',
    fretboardWood: '',
    fretboardWoodOther: '',
    neckConstruction: '',
    scaleLength: '',
    scaleLengthOther: '',
    fretboardRadius: '',
    fretboardRadiusOther: '',
    fretAmmount: '',
    fretSize: '',
    fretMaterial: '',
    bridge: '',
    bridgeOther: '',
    nut: '',
    tuners: '',
    tunersOther: '',
    tunerDetails: '',
    pickups: '',
    pickupsOther: '',
    pickupDetails: '',
    controls: '',
    jackPlate: '',
    sideDots: '',
    finishColor: '',
    finish: '',
    hardwareColor: '',
    straplockOptions: '',
    binding: '',
    inlays: '',
    notes: '',
  });

  const [otherFields, setOtherFields] = useState({
    bodyStyle: false,
    headstockStyle: false,
    bodyWood: false,
    neckWood: false,
    neckProfile: false,
    fretboardWood: false,
    fretboardRadius: false,
    scaleLength: false,
    bridge: false,
    tuners: false,
    pickups: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'bodyStyle' || name === 'headstockStyle' || name === 'bodyWood' || name === 'fretboardWood' || name === 'neckWood' || name === 'neckProfile' || name === 'fretboardRadius' || name === 'scaleLength' || name === 'bridge' || name === 'tuners' ||name === 'pickups') {
      setOtherFields((prevFields) => ({
        ...prevFields,
        [name]: value === 'Other',
      }));
    }
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f05kigw', 'template_lvcms4m', form.current, 'dPcxST3zI0_MhNt05')
      .then(() => {
        console.log('SUCCESS!');
        setIsSubmitted(true);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
    console.log(formData);
  };

  const renderSelectField = (fieldName, label, options) => (
    <div className="mb-4">
      <label htmlFor={fieldName} className="block text-accent2">
        {label}
      </label>
      <select
        id={fieldName}
        name={fieldName}
        value={formData[fieldName]}
        onChange={handleChange}
        className="form-select mt-1 block w-full bg-accent"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="mt-4">
        {otherFields[fieldName] &&
          renderTextField(`${fieldName}Other`, `${label} (Other)`, `Enter ${label} details`)}
      </div>
    </div>
  );

  const renderTextField = (fieldName, label, placeholder) => (
    <div className="mb-4">
      <label htmlFor={fieldName} className="block text-accent2">
        {label}
      </label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        value={formData[fieldName]}
        onChange={handleChange}
        className="form-input mt-1 block w-full bg-accent placeholder-accent2"
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="container mx-auto px-4 pt-[130px] lg:pt-[170px]">
      <h2 className='flex xl:justify-center'>Custom Build Form:</h2>
      <div className="pb-7"></div>
      <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto pb-7">
        {renderTextField('name', 'Name', "Name")}
        {renderTextField('email', 'Email', "Email")}
        {renderSelectField('instrument', 'Instrument', ['Guitar', 'Bass'])}
        {renderSelectField('bodyStyle', 'Body Style', [
          'Morgul-Blade',
          'Stormbringer',
          'Warmachine',
          'Carrionbird',
          'Jawbreaker',
          'Other',
        ])}
        {renderSelectField('headstockStyle', 'Headstock Style', [
          '3x3',
          '6 inline',
          'reverse 6 inline',
        ])}
        {renderSelectField('neckJoint', 'Neck Joint', [
          'Bolt-on',
          'Neck-thru',
          'Set Neck',
        ])}
        {renderSelectField('numStrings', 'Number of Strings', [
          '4 (Bass)',
          '5 (Bass)',
          '6 (Guitar)',
          '7 (Guitar)',
        ])}
        {renderSelectField('dexterity', 'Dexterity', ['Right', 'Left'])}
        {renderSelectField('neckProfile', 'Neck Profile', [
          'Slim C',
          'Medium C',
          'Fat C',
          'Thin D',
          'Medium V',
          'Asymmetrical',
          'Other',
        ])}
        {renderSelectField('bodyWood', 'Body Wood', [
          'Alder',
          'Ash',
          'Black Limba',
          'Mahogany',
          'Walnut',
          'Other',
        ])}
        {renderSelectField('neckWood', 'Neck Wood', [
          'Maple',
          'Roasted Maple',
          'Mahogany',
          'Other'
        ])}
        {renderSelectField('fretboardWood', 'Fretboard Wood', [
          'Ebony',
          'Rosewood',
          'Maple',
          'Other'
        ])}
        {renderTextField('top', 'Top (optional)*', 'If yes please describe')}
        {renderSelectField('neckConstruction', 'Neck Construction', [
          '1 piece(quartersawn)',
          '3 Piece',
          '5 Piece',
        ])}
        {renderSelectField('scaleLength', 'Scale Length', [
          '24.75"',
          '25.5"',
          '30"',
          '34"',
          'Other'
        ])}
        {renderSelectField('fretboardRadius', 'Fretboard Radius', [
          '10"',
          '12"',
          '14"',
          '10"-14" Compound',
          '12"-16" Compound',
          'Other',
        ])}
        {renderTextField('fretAmmount', 'Fret Amount', 'Ammount of frets')}
        {renderSelectField('fretSize', 'Fret Size', [
          'Medium',
          'Jumbo',
          'Super Jumbo',
          'Tall and Skinny'
        ])}
        {renderSelectField('fretMaterial', 'Fret Material', [
          'Nickel Silver',
          'Stainless Steel',
          'Evo-Gold',
        ])}
        {renderSelectField('bridge', 'Bridge', [
          'Floyd Rose Original Tremolo',
          'Hipshot Fixed',
          'Hipshot Tone-A-Matic',
          'Kahler Quad Fixed',
          'Kahler 2300/7300',
          'Gotoh GE1996T',
          'Tonepros AVT2M',
          'Other',
        ])}
        {renderSelectField('nut', 'Nut', [
          'TUSQ XL',
          'Lok-N-Roll',
          'Floyd Locking Nut',
          'Bone',
        ])}
        {renderSelectField('tuners', 'Tuners', [
          'Hipshot',
          'Grover',
          'Gotoh',
          'Other',
        ])}
         {renderTextField(
          'tunerDetails',
          'Tuner Details',
          'Please enter more details',
        )}
        {renderSelectField('pickups', 'Pickups', [
          'EMG',
          'Seymour Duncan',
          'Dimarzio',
          'Bare Knuckle',
          'Other'
        ])}
        {renderTextField(
          'pickupDetails',
          'Pickup Details',
          'Please enter more details',
        )}
        {renderTextField('controls', 'Controls (Volume, Tone, Switches)', 'Enter controls type')}
        {renderTextField('jackPlate', 'Jackplate style and location', 'Enter details here')}
        {renderSelectField('sideDots', 'Side Dots', [
          'Luminlay',
          'Mother of Pearl (MOP)',
          'Pearloid',
          'Plastic',
        ])}
        {renderTextField('finishColor', 'Dye/Paint/Tint Color', 'Enter here')}
        {renderSelectField('finish', 'Finish', [
          'High Gloss 2k Urethane',
          'High Gloss Nitro',
          'Satin Nitro',
          'Matte 2k Urethane',
          'Oil Finish (Clear only)',
        ])}
        {renderSelectField('hardwareColor', 'Hardware Color/finish', [
          'Chrome',
          'Black',
          'Gold',
        ])}
        {renderTextField('binding', 'Binding (optional)*', 'If yes please describe')}
        {renderTextField('inlays', 'Inlays (optional)*', 'If yes please describe')}
        {renderSelectField('straplockOptions', 'Straplock/Button Options', [
          'Regular',
          'Schaller Locking',
          'Dunlop Flush-mount Locking',
        ])}
        <p className="pt-6">
          Anything else you want. I won’t say yes to everything but doesn’t hurt
          to ask!
        </p>
        {renderTextField('notes', 'Add notes')}

        <p className="py-6">
          Please allow 1-3 business days to complete your quote. Thanks for
          inquiring!
        </p>
        <button
          type="submit"
          className="bg-accent hover:bg-header text-accent2 font-bold py-2 px-4 rounded"
          disabled={isSubmitted}
        >
          {isSubmitted ? 'SENT!' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default GuitarForm;
