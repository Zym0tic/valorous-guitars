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
    notes: '',
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
      <div className="py-7">
        <p>
          If interested in a custom build, the best and most accurate way for me
          to quote you is by filling out this form. I take a more personalized,
          conversational approach to the design process. This allows me to fully
          understand your concept and build you the best possible instrument. If
          you’re unsure about any certain specifications, we can discuss options
          further or feel free to leave it to dealers choice, I will make my
          best recommendations.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="instrument" className="block text-gray-700">
            Select an Instrument
          </label>
          <select
            id="instrument"
            name="instrument"
            value={formData.instrument}
            onChange={handleChange}
            className="form-select mt-1 block w-full bg-accent"
          >
            <option value="">Choose an instrument</option>
            <option value="guitar">Guitar</option>
            <option value="bass">Bass</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="bodyStyle" className="block text-gray-700">
            Body Style
          </label>
          <input
            type="text"
            id="bodyStyle"
            name="bodyStyle"
            value={formData.bodyStyle}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="V, super strat, explorer.."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="headstockStyle" className="block text-gray-700">
            Headstock Style
          </label>
          <select
            id="headstockStyle"
            name="headstockStyle"
            value={formData.headstockStyle}
            onChange={handleChange}
            className="form-select mt-1 block w-full bg-accent"
          >
            <option value="">Choose a headstock style</option>
            <option value="6-inline">6-inline</option>
            <option value="3+3">3+3</option>
            <option value="reversed">Reversed</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="neckConstruction" className="block text-gray-700">
            Neck Construction
          </label>
          <select
            id="neckConstruction"
            name="neckConstruction"
            value={formData.neckConstruction}
            onChange={handleChange}
            className="form-select mt-1 block w-full bg-accent"
          >
            <option value="">Select Neck Construction</option>
            <option value="bolt-on">Bolt-on</option>
            <option value="neck-thru">Neck-thru</option>
            <option value="set-neck">Set Neck</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="numStrings" className="block text-gray-700">
            Number of Strings
          </label>
          <input
            type="text"
            id="numStrings"
            name="numStrings"
            value={formData.numStrings}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="Enter number of strings"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="neckProfile" className="block text-gray-700">
            Neck Profile
          </label>
          <select
            id="neckProfile"
            name="neckProfile"
            value={formData.neckProfile}
            onChange={handleChange}
            className="form-select mt-1 block w-full bg-accent"
          >
            <option value="">Select Neck Profile</option>
            <option value="Slim C">Slim C</option>
            <option value="Asymmetrical">Asymmetrical</option>
            <option value="Baseball bat">Baseball bat</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="woodSelection" className="block text-gray-700">
            Wood Selection (Body/Neck/Fretboard/etc.)
          </label>
          <input
            type="text"
            id="woodSelection"
            name="woodSelection"
            value={formData.woodSelection}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="Enter wood selection"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="scaleLength" className="block text-gray-700">
            Scale Length
          </label>
          <input
            type="text"
            id="scaleLength"
            name="scaleLength"
            value={formData.scaleLength}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="Enter scale length"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fretboardRadius" className="block text-gray-700">
            Fretboard Radius
          </label>
          <input
            type="text"
            name="fretboardRadius"
            value={formData.fretboardRadius}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="Enter fretboard Radius"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="frets" className="block text-gray-700">
            Frets
          </label>
          <input
            type="text"
            name="frets"
            value={formData.frets}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="Enter frets type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bridge" className="block text-gray-700">
            Bridge
          </label>
          <select
            id="bridge"
            name="bridge"
            value={formData.bridge}
            onChange={handleChange}
            className="form-select mt-1 block w-full bg-accent"
          >
            <option value="">Select Bridge</option>
            <option value="Floyd Rose">Floyd Rose</option>
            <option value="Kahler">Kahler</option>
            <option value="Tune-o-matic">Tune-o-matic</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="nut" className="block text-gray-700">
            Nut
          </label>
          <input
            type="text"
            name="nut"
            value={formData.nut}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="Enter nut type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tuners" className="block text-gray-700">
            Tuners
          </label>
          <input
            type="text"
            name="tuners"
            value={formData.tuners}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="Enter tuners type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pickups" className="block text-gray-700">
            Pickups
          </label>
          <input
            type="text"
            name="pickups"
            value={formData.pickups}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="Enter pickups type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="controls" className="block text-gray-700">
            Controls
          </label>
          <input
            type="text"
            name="controls"
            value={formData.controls}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="Enter controls type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jackPlate" className="block text-gray-700">
            Jack Plate
          </label>
          <input
            type="text"
            name="jackPlate"
            value={formData.jackPlate}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="Enter controls type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sideDots" className="block text-gray-700">
            Side Dots
          </label>
          <select
            id="sideDots"
            name="sideDots"
            value={formData.sideDots}
            onChange={handleChange}
            className="form-select mt-1 block w-full bg-accent"
          >
            <option value="">Select Side Dots</option>
            <option value="luminlay">Luminlay</option>
            <option value="MOP">Mother of Pearl (MOP)</option>
            <option value="plastic">Plastic</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="finishColor" className="block text-gray-700">
            Finish Color
          </label>
          <select
            id="finishColor"
            name="finishColor"
            value={formData.finishColor}
            onChange={handleChange}
            className="form-select mt-1 block w-full bg-accent"
          >
            <option value="">Select Finish Color</option>
            <option value="olympic white satin">Olympic White Satin</option>
            <option value="cherry sunburst high gloss lacquer">
              Cherry Sunburst High Gloss Lacquer
            </option>
            <option value="clear oiled finish">Clear Oiled Finish</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="hardwareColor" className="block text-gray-700">
            Hardware Color
          </label>
          <select
            id="hardwareColor"
            name="hardwareColor"
            value={formData.hardwareColor}
            onChange={handleChange}
            className="form-select mt-1 block w-full bg-accent"
          >
            <option value="">Select Hardware Color</option>
            <option value="chrome">Chrome</option>
            <option value="black">Black</option>
            <option value="gold">Gold</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="binding" className="block text-gray-700">
            Binding
          </label>
          <select
            id="binding"
            name="binding"
            value={formData.binding}
            onChange={handleChange}
            className="form-select mt-1 block w-full bg-accent"
          >
            <option value="">Select Binding</option>
            <option value="white abs">White ABS</option>
            <option value="curly maple">Curly Maple</option>
            <option value="matching fretboard">Matching Fretboard</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="inlays" className="block text-gray-700">
            Inlays
          </label>
          <select
            id="inlays"
            name="inlays"
            value={formData.inlays}
            onChange={handleChange}
            className="form-select mt-1 block w-full bg-accent"
          >
            <option value="">Select Inlays</option>
            <option value="pearl dots">Pearl Dots</option>
            <option value="MOP blocks">MOP Blocks</option>
            <option value="shark fins">Shark Fins</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block text-gray-700">
            Notes
          </label>
          <p>
            Anything else you want. I won’t say yes to everything but doesn’t
            hurt to ask!
          </p>
          <input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-accent"
            placeholder="Add notes"
          />
        </div>
        <p>
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
