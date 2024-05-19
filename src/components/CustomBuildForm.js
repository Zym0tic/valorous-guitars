import React, { useState } from 'react';

const GuitarForm = () => {
  const [formData, setFormData] = useState({
    instrument: '',
    bodyStyle: '',
    headstockStyle: '',
    neckConstruction: '',
    numStrings: '',
    orientation: '',
    neckProfile: '',
    bodyWood: '',
    neckWood: '',
    scaleLength: '',
    fretboardRadius: '',
    frets: '',
    bridge: '',
    nut: '',
    tuners: '',
    pickups: '',
    controls: '',
    jackPlate: '',
    sideDots: '',
    finishColor: '',
    hardwareColor: '',
    binding: '',
    inlays: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for example, send the data to a server
    console.log(formData);
  };

  const renderSelectField = (fieldName, options) => (
    <div className="mb-4">
      <label htmlFor={fieldName} className="block text-gray-700">{fieldName}</label>
      <select
        id={fieldName}
        name={fieldName}
        value={formData[fieldName]}
        onChange={handleChange}
        className="form-select mt-1 block w-full bg-accent"
      >
        <option value="">Select {fieldName}</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );

  const renderTextField = (fieldName, placeholder) => (
    <div className="mb-4">
      <label htmlFor={fieldName} className="block text-gray-700">{fieldName}</label>
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
      <div className="py-7">
        <p>
          If interested in a custom build, the best and most accurate way for me to quote you is by filling out this form. I take a more personalized, conversational approach to the design process. This allows me to fully understand your concept and build you the best possible instrument. If you’re unsure about any certain specifications, we can discuss options further or feel free to leave it to dealers choice, I will make my best recommendations.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto pb-7">
        {renderSelectField("instrument", ["Guitar", "Bass"])}
        {renderSelectField("bodyStyle", ["Morgul-Blade", "Stormbringer", "Warmachine", "Other"])}
        {renderSelectField("headstockStyle", ["Morgul-Blade", "Stormbringer", "Warmachine", "Other"])}
        {renderSelectField("neckConstruction", ["Bolt-on", "Neck-thru", "Set Neck"])}
        {renderSelectField("numStrings", ["4 (Bass)", "5 (Bass)", "6 (Guitar)", "7 (guitar)"])}
        {renderSelectField("orientation", ["Right", "Left"])}
        {renderSelectField("neckProfile", ["Slim C", "Medium C", "Fat C", "Speed", "Medium V", "Asymmetrical"])}
        {renderSelectField("bodyWood", ["Alder", "Ash", "Black Limba", "Mahogany", "Walnut"])}
        {renderSelectField("neckWood", ["Maple", "Roasted Maple", "Mahogany"])}
        {renderSelectField("fretboardWood", ["Ebony", "Rosewood", "Maple"])}
        {renderSelectField("neckConstruction", ["1 piece", "3 Piece", "5 Piece"])}
        {renderTextField("scaleLength", "Enter scale length")}
        {renderTextField("fretboardRadius", "Enter fretboard Radius")}
        {renderTextField("frets (Size, material, amount)", "Enter frets type")}
        {renderSelectField("bridge", ["Floyd Rose", "Kahler", "Tune-o-matic"])}
        {renderSelectField("nut", ["TUSQ XL 1-11/16”", "Lok-N-Roll", "unbleached bone 1-5/8”"])}
        {renderSelectField("tuners", ["Hipshot open gears", "Grover vintage", "gotoh locking tuners"])}
        {renderSelectField("pickups", ["EMG 57/66", "Seymour Duncan JB/‘59", "Single Bridge Super Distortion"])}
        {renderTextField("controls", "Enter controls type")}
        {renderTextField("jackPlate", "Enter jack plate type")}
        {renderSelectField("sideDots", ["Luminlay", "Mother of Pearl (MOP)", "Plastic"])}
        {renderSelectField("finishColor", ["Olympic White Satin", "Cherry Sunburst High Gloss Lacquer", "Clear Oiled Finish"])}
        {renderSelectField("hardwareColor", ["Chrome", "Black", "Gold"])}
        {renderSelectField("binding", ["White ABS", "Curly Maple", "Matching Fretboard"])}
        {renderSelectField("inlays", ["Pearl Dots", "MOP Blocks", "Shark Fins"])}
        <p className='pt-6'>Anything else you want. I won’t say yes to everything but doesn’t hurt to ask!</p>
        {renderTextField("notes", "Add notes")}
        <p className='py-6'>Please allow 1-3 business days to complete your quote. Thanks for inquiring!</p>
        <button type="submit" className="bg-accent hover:bg-header text-accent2 font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default GuitarForm;
