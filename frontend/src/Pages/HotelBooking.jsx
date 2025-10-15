import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const backendURL = import.meta.env.VITE_BACKEND_BASE_API + '/bookings/';


const HotelBooking = () => {
    const [formData, setFormData] = useState({
        location: "",
        check_in: "",
        check_out: "",
        name: "",
        email: "",
        phone: "",
    });

    const [bookings, setBookings] = useState([]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting to:", backendURL);
            console.log("Form data:", formData);
            const response = await axios.post(backendURL, formData);
            if (response.status === 201) {
                alert("Booking Successful!");
                setFormData({
                    location: "",
                    check_in: "",
                    check_out: "",
                    name: "",
                    email: "",
                    phone: "",
                    people: "",
                });
                fetchBookings();
            }
        } catch (error) {
            console.error("Error submitting booking:", error);
            alert("Error connecting to backend!");
        }
    };

    const fetchBookings = async () => {
        try {
            const res = await axios.get(backendURL, {
                headers: { "Content-Type": "application/json" },
            });
            if (res.status === 200) {
                setBookings(res.data);
                console.log("✅ All bookings fetched successfully:", res.data);
            } else {
                console.warn("⚠️ Unexpected response status:", res.status);
            }
        } catch (err) {
            console.error("❌ Error fetching bookings:", err.response?.data || err.message);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Image Section */}
                <div
                    className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center relative"
                    style={{
                        backgroundImage:
                            "url('/src/assets/house-with-pool-palm-tree-background.jpg')",
                    }}
                >

                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold">🏕️</span>
        <Link to='/'>
        <h1 className="text-white text-xl font-semibold">VibeHive</h1>
        </Link>
      </div>
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-[#0b0b0b] py-10">
                    <form
                        onSubmit={handleSubmit}
                        className="w-11/12 sm:w-3/4 max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg text-white"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-center text-yellow-400">
                            Book Your Hotel
                        </h2>

                        {/* Location Dropdown */}
                        <div className="mb-4">
                            <label className="block text-white mb-2">Location</label>
                            <select
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full bg-white/10 border border-yellow-400/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            >
                                <option value="" className="text-gray-800 bg-black">Select Location</option>
                                <option value="Munnar" className="text-gray-800 bg-black">Munnar</option>
                                <option value="Trivandrum" className="text-gray-800 bg-black">Trivandrum</option>
                                <option value="Fort Kochi" className="text-gray-800 bg-black">Fort Kochi</option>
                            </select>
                        </div>

                        {/* Check-in Date */}
                        <div className="mb-4">
                            <label className="block text-white mb-2">Check-in Date</label>
                            <input
                                type="date"
                                name="check_in"
                                value={formData.check_in}
                                onChange={handleChange}
                                className="w-full bg-white/10 border border-yellow-400/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>

                        {/* Check-out Date */}
                        <div className="mb-4">
                            <label className="block text-white mb-2">Check-out Date</label>
                            <input
                                type="date"
                                name="check_out"
                                min={formData.check_in || new Date().toISOString().split("T")[0]} 
                                value={formData.check_out}
                                onChange={handleChange}
                                className="w-full bg-white/10 border border-yellow-400/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>

                        {/* Name */}
                        <div className="mb-4">
                            <label className="block text-white mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-white/10 border border-yellow-400/50 text-white rounded-lg p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-white mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@mail.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white/10 border border-yellow-400/50 text-white rounded-lg p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>

                        {/* Number of people */}
                        <div className="mb-6">
                        <label className="block text-white mb-2">Number of People</label>
                        <input
                            type="number"
                            name="people"
                            placeholder="1"
                            value={formData.people}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-yellow-400/50 text-white rounded-lg p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition"
                        >
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HotelBooking;