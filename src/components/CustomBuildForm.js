import React, { useState } from 'react';

const GuitarForm = () => {
  const [formData, setFormData] = useState({
    instrument: '',
    bodyStyle: '',
    headstockStyle: '',
    neckJoint: '',
    numStrings: '',
    orientation: '',
    neckProfile: '',
    bodyWood: '',
    neckWood: '',
    fretboardWood: '',
    neckConstruction: '',
    scaleLength: '',
    fretboardRadius: '',
    fretAmmount: '',
    fretSize: '',
    fretMaterial: '',
    bridge: '',
    nut: '',
    tuners: '',
    pickups: '',
    pickupDetails: '',
    controls: '',
    jackPlate: '',
    sideDots: '',
    finishColor: '',
    hardwareColor: '',
    binding: '',
    inlays: '',
    notes: '',
  });

  const [otherFields, setOtherFields] = useState({
    bodyStyle: false,
    headstockStyle: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value === 'Other') {
      setOtherFields({
        ...otherFields,
        [name]: true,
      });
    } else if (otherFields[name]) {
      setOtherFields({
        ...otherFields,
        [name]: false,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for example, send the data to a server
    console.log(formData);
  };

  const renderSelectField = (fieldName, label, options) => (
    <div className="mb-4">
      <label htmlFor={fieldName} className="block text-gray-700">
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
          renderTextField(``, `Enter ${label} details`)}
      </div>
    </div>
  );

  const renderTextField = (fieldName, label, placeholder) => (
    <div className="mb-4">
      <label htmlFor={fieldName} className="block text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        value={formData[fieldName]}
        onChange={handleChange}
        className="form-input mt-1 block w-full bg-accent text-accent2"
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="container mx-auto px-4 pt-[130px] lg:pt-[170px]">
      <div className="py-7"></div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto pb-7">
        {renderSelectField('instrument', 'Instrument', ['Guitar', 'Bass'])}
        {renderSelectField('bodyStyle', 'Body Style', [
          'Morgul-Blade',
          'Stormbringer',
          'Warmachine',
          'Other',
        ])}
        {renderSelectField('headstockStyle', 'Headstock Style', [
          'Morgul-Blade',
          'Stormbringer',
          'Warmachine',
          'Other',
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
        {renderSelectField('orientation', 'Orientation', ['Right', 'Left'])}
        {renderSelectField('neckProfile', 'Neck Profile', [
          'Slim C',
          'Medium C',
          'Fat C',
          'Speed',
          'Medium V',
          'Asymmetrical',
        ])}
        {renderSelectField('bodyWood', 'Body Wood', [
          'Alder',
          'Ash',
          'Black Limba',
          'Mahogany',
          'Walnut',
        ])}
        {renderSelectField('neckWood', 'Neck Wood', [
          'Maple',
          'Roasted Maple',
          'Mahogany',
        ])}
        {renderSelectField('fretboardWood', 'Fretboard Wood', [
          'Ebony',
          'Rosewood',
          'Maple',
        ])}
        {renderSelectField('neckConstruction', 'Neck Construction', [
          '1 piece',
          '3 Piece',
          '5 Piece',
        ])}
        {renderSelectField('scaleLength', 'Scale Length', [
          '24.75"',
          '25.5"',
          '28.5"',
          '30"',
          '34"',
        ])}
        {renderSelectField('fretboardRadius', 'Fretboard Radius', [
          '10"',
          '12"',
          '14"',
          '10"-14" Compound',
          '12"-16" Compound',
        ])}
        {renderSelectField('fretAmmount', 'Fret Amount', ['22', '24', '27'])}
        {renderSelectField('fretSize', 'Fret Size', [
          'Medium',
          'Jumbo',
          'Super Jumbo',
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
        ])}
        {renderSelectField('nut', 'Nut', [
          'TUSQ XL',
          'Lok-N-Roll',
          'Floyd Locking Nut',
          'Bone',
        ])}
        {renderSelectField('tuners', 'Tuners', [
          'Hipshot open gears',
          'Grover vintage',
          'Gotoh locking tuners',
        ])}
        {renderSelectField('pickups', 'Pickups', [
          'EMG',
          'Seymour Duncan',
          'Dimarzio',
          'Bare Knuckle',
        ])}
        {renderTextField(
          'pickupsDetails',
          'Pickup Details',
          'Please enter more details'
        )}
        {renderTextField('controls', 'Controls', 'Enter controls type')}
        {renderTextField('jackPlate', 'Jack Plate', 'Enter jack plate type')}
        {renderSelectField('sideDots', 'Side Dots', [
          'Luminlay',
          'Mother of Pearl (MOP)',
          'Plastic',
        ])}
        {renderSelectField('finishColor', 'Finish Color', [
          'Olympic White Satin',
          'Cherry Sunburst High Gloss Lacquer',
          'Clear Oiled Finish',
        ])}
        {renderSelectField('hardwareColor', 'Hardware Color', [
          'Chrome',
          'Black',
          'Gold',
        ])}
        {renderSelectField('binding', 'Binding', [
          'White ABS',
          'Curly Maple',
          'Matching Fretboard',
        ])}
        {renderSelectField('inlays', 'Inlays', [
          'Pearl Dots',
          'MOP Blocks',
          'Shark Fins',
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GuitarForm;
