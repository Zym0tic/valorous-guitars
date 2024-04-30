import React, { useState } from 'react';

const GuitarForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    instrument: '',
    bodyStyle: '',
    headstockStyle: '',
    neckConstruction: '',
    numStrings: '',
    neckProfile: '',
    woodSelection: '',
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
    notes: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 pt-[130px] lg:pt-[170px]">
      <div className='py-7'>
        <p>
        If interested in a custom build, the best and most accurate way for me to quote you is by filling out this form. I take a more personalized, conversational approach to the design process. This allows me to fully understand your concept and build you the best possible instrument. If you’re unsure about any certain specifications, we can discuss options further or feel free to leave it to dealers choice, I will make my best recommendations.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="instrument" className="block text-gray-700">Guitar or Bass</label>
          <input
            type="text"
            id="instrument"
            name="instrument"
            value={formData.instrument}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter guitar or bass"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bodyStyle" className="block text-gray-700">Body Style</label>
          <input
            type="text"
            id="bodyStyle"
            name="bodyStyle"
            value={formData.bodyStyle}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter body style"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="headstockStyle" className="block text-gray-700">Headstock Style</label>
          <input
            type="text"
            id="headstockStyle"
            name="headstockStyle"
            value={formData.headstockStyle}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter headstock style"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="neckConstruction" className="block text-gray-700">Neck Construction</label>
          <input
            type="text"
            id="neckConstruction"
            name="neckConstruction"
            value={formData.neckConstruction}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter neck construction"
          />
        </div>
        {/* Add more input fields for other specifications similarly */}
        {/* For example: */}
        <div className="mb-4">
          <label htmlFor="numStrings" className="block text-gray-700">Number of Strings</label>
          <input
            type="text"
            id="numStrings"
            name="numStrings"
            value={formData.numStrings}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter number of strings"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="neckProfile" className="block text-gray-700">Neck Profile</label>
          <input
            type="text"
            id="neckProfile"
            name="neckProfile"
            value={formData.neckProfile}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter neck profile"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="woodSelection" className="block text-gray-700">Wood Selection</label>
          <input
            type="text"
            id="woodSelection"
            name="woodSelection"
            value={formData.woodSelection}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter wood selection"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="scaleLength" className="block text-gray-700">Scale Length</label>
          <input
            type="text"
            id="scaleLength"
            name="scaleLength"
            value={formData.scaleLength}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter scale length"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fretboardRadius" className="block text-gray-700">Fretboard Radius</label>
          <input
            type="text"
            name="fretboardRadius"
            value={formData.fretboardRadius}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter fretboard Radius"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="frets" className="block text-gray-700">Frets</label>
          <input
            type="text"
            name="frets"
            value={formData.frets}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter frets type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bridge" className="block text-gray-700">Bridge</label>
          <input
            type="text"
            name="bridge"
            value={formData.bridge}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter bridge style"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nut" className="block text-gray-700">Nut</label>
          <input
            type="text"
            name="nut"
            value={formData.nut}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter nut type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tuners" className="block text-gray-700">Tuners</label>
          <input
            type="text"
            name="tuners"
            value={formData.tuners}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter tuners type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pickups" className="block text-gray-700">Pickups</label>
          <input
            type="text"
            name="pickups"
            value={formData.pickups}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter pickups type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="controls" className="block text-gray-700">Controls</label>
          <input
            type="text"
            name="controls"
            value={formData.controls}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter controls type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jackPlate" className="block text-gray-700">Jack Plate</label>
          <input
            type="text"
            name="jackPlate"
            value={formData.jackPlate}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Enter controls type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sideDots" className="block text-gray-700">Side Dots</label>
          <input
            type="text"
            name="sideDots"
            value={formData.sideDots}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="luminlay, MOP, plastic.."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="finishColor" className="block text-gray-700">Side Dots</label>
          <input
            type="text"
            name="finishColor"
            value={formData.finishColor}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="olympic white satin, cherry sunburst high gloss lacquer, clear oiled finish.."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hardwareColor" className="block text-gray-700">Hardware Color</label>
          <input
            type="text"
            name="hardwareColor"
            value={formData.hardwareColor}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="chrome, black, gold.."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="binding" className="block text-gray-700">Binding</label>
          <input
            type="text"
            name="binding"
            value={formData.binding}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="white abs, curly maple, matching fretboard, etc.."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inlays" className="block text-gray-700">Inlays</label>
          <input
            type="text"
            name="inlays"
            value={formData.inlays}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="pearl dots, MOP blocks, shark fins.."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block text-gray-700">Notes</label>
          <p>Anything else you want. I won’t say yes to everything but doesn’t hurt to ask!</p>
          <input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            placeholder="Add notes"
          />
        </div>
        <p>Please allow 1-3 business days to complete your quote. Thanks for inquiring!</p>
        <button type="submit" className="bg-accent hover:bg-header text-accent2 font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default GuitarForm;
