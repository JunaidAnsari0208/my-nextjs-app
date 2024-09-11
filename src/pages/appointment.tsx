// src/pages/appointment.tsx
import React, { useState } from "react";

const Appointment: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientContact, setPatientContact] = useState("");
  const [healthConcern, setHealthConcern] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, API call, etc.
    console.log({
      selectedDoctor,
      selectedDate,
      selectedTime,
      patientName,
      patientContact,
      healthConcern,
    });
  };

  return (
    <section className="bg-gray-100 py-16">
      {/* Our Doctors Section */}
      <section className="w-full bg-white py-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Our Doctors
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Doctor 1 */}
            <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/doctor1.jpg" // Replace with your image path
                alt="Dr. Smith"
                className="w-full h-48 object-cover rounded-full mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. John Smith
              </h3>
              <p className="text-gray-600 mb-1">Cardiologist</p>
              <p className="text-gray-500">MD, FACC</p>
            </div>

            {/* Doctor 2 */}
            <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/doctor2.jpg" // Replace with your image path
                alt="Dr. Johnson"
                className="w-full h-48 object-cover rounded-full mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. Emily Johnson
              </h3>
              <p className="text-gray-600 mb-1">Dermatologist</p>
              <p className="text-gray-500">MD, FAAD</p>
            </div>

            {/* Doctor 3 */}
            <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/doctor3.jpg" // Replace with your image path
                alt="Dr. Lee"
                className="w-full h-48 object-cover rounded-full mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. Alex Lee
              </h3>
              <p className="text-gray-600 mb-1">General Practitioner</p>
              <p className="text-gray-500">MD, FACGP</p>
            </div>

            {/* Doctor 4 */}
            <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/doctor4.jpg" // Replace with your image path
                alt="Dr. Williams"
                className="w-full h-48 object-cover rounded-full mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. Lisa Williams
              </h3>
              <p className="text-gray-600 mb-1">Neurologist</p>
              <p className="text-gray-500">MD, FAAN</p>
            </div>

            {/* Doctor 5 */}
            <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/doctor5.jpg" // Replace with your image path
                alt="Dr. Brown"
                className="w-full h-48 object-cover rounded-full mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. Michael Brown
              </h3>
              <p className="text-gray-600 mb-1">Orthopedic Surgeon</p>
              <p className="text-gray-500">MD, FAAOS</p>
            </div>

            {/* Doctor 6 */}
            <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/doctor6.jpg" // Replace with your image path
                alt="Dr. Davis"
                className="w-full h-48 object-cover rounded-full mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. Sarah Davis
              </h3>
              <p className="text-gray-600 mb-1">Pediatrician</p>
              <p className="text-gray-500">MD, FAAP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book an Appointment Form */}
      <section className="w-full bg-white py-12">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-8 text-center">
          Book an Appointment
        </h1>

        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Doctor/Specialty Selection */}
            <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
              <label
                htmlFor="doctor"
                className="block text-lg font-medium text-gray-700"
              >
                Select Doctor or Specialty
              </label>
              <select
                id="doctor"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="block w-full mt-2 p-2 border border-gray-300 rounded-md bg-white"
                required
              >
                <option value="" disabled>
                  Select a doctor or specialty
                </option>
                <option value="Dr. Smith">Dr. Smith - Cardiologist</option>
                <option value="Dr. Johnson">Dr. Johnson - Dermatologist</option>
                <option value="Dr. Lee">Dr. Lee - General Practitioner</option>
                {/* Add more doctors/specialties */}
              </select>
            </div>

            {/* Date Selection */}
            <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
              <label
                htmlFor="date"
                className="block text-lg font-medium text-gray-700"
              >
                Select Date
              </label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="block w-full mt-2 p-2 border border-gray-300 rounded-md bg-white"
                required
              />
            </div>

            {/* Time Selection */}
            <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
              <label
                htmlFor="time"
                className="block text-lg font-medium text-gray-700"
              >
                Select Time
              </label>
              <input
                type="time"
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="block w-full mt-2 p-2 border border-gray-300 rounded-md bg-white"
                required
              />
            </div>

            {/* Patient Information */}
            <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Patient Name
              </label>
              <input
                type="text"
                id="name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="block w-full mt-2 p-2 border border-gray-300 rounded-md bg-white"
                required
              />
            </div>

            <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
              <label
                htmlFor="contact"
                className="block text-lg font-medium text-gray-700"
              >
                Contact Information
              </label>
              <input
                type="tel"
                id="contact"
                value={patientContact}
                onChange={(e) => setPatientContact(e.target.value)}
                className="block w-full mt-2 p-2 border border-gray-300 rounded-md bg-white"
                required
              />
            </div>

            {/* Health Concern */}
            <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
              <label
                htmlFor="concern"
                className="block text-lg font-medium text-gray-700"
              >
                Health Concern (Optional)
              </label>
              <textarea
                id="concern"
                value={healthConcern}
                onChange={(e) => setHealthConcern(e.target.value)}
                className="block w-full mt-2 p-2 border border-gray-300 rounded-md bg-white"
                rows={4}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Appointment;
