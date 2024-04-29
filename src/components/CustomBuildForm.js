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
            placeholder="Enter scale lengthvvfv"
          />
        </div>
        {/* Repeat this pattern for each input */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default GuitarForm;
