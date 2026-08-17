import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-[#0f0f0f]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="border-2 border-[#c5a059] absolute -top-4 -left-4 w-full h-full z-0 opacity-20 rounded-xl"></div>
                    <img
                        src="https://res.cloudinary.com/drmpv5vne/image/upload/v1783768649/DSC_0366_shctsq.jpg"
                        alt="Our Story"
                        className="relative z-10 rounded-xl shadow-2xl hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute -bottom-8 -right-8 bg-[#c5a059] p-8 rounded-xl z-20 hidden lg:block">
                        <p className="text-black font-serif text-4xl font-bold italic">2+</p>
                        <p className="text-black text-xs font-bold uppercase tracking-widest">Years of Heritage</p>
                    </div>
                </div>
                <div>
                    <span className="text-[#c5a059] text-sm uppercase tracking-[0.3em] font-bold block mb-4">Our Heritage</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-5">Bringing Real Taste Back to Your Plate</h2>
                    <p className="text-gray-400 leading-relaxed">
                        At Masala Mist, we believe that truly great food begins with authentic ingredients, traditional flavours, and the passion to preserve them. Our journey was born from a simple vision to bring the richness of genuine Indian spices and seasonings from trusted sources straight to your kitchen.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-2">
                        Every spice is carefully selected, thoughtfully processed, and expertly blended to preserve its natural aroma, colour, and authentic flavour. From hand-selection and slow roasting to precise blending and quality checks, every step reflects our commitment to purity, freshness, and consistency.
                    </p>

                    <p className='text-gray-400 leading-relaxed mb-5'>
                       At Masala Mist, we don’t simply create spices we preserve the true taste of tradition. Our flavours are made to bring families together, inspire memorable meals, and add a touch of authenticity to every dish.
                    </p>

                    <p>
                        <b>Masala Mist — Authentic Flavours. Timeless Tradition.</b>
                    </p>

                    <br />

                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-[#c5a059]" size={20} />
                            <span className="text-md font-medium">Pure and authentic ingredients</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-[#c5a059]" size={20} />
                            <span className="text-md font-medium">Consistent flavour in every blend</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-[#c5a059]" size={20} />
                            <span className="text-md font-medium">Freshness you can smell</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-[#c5a059]" size={20} />
                            <span className="text-md font-medium">Quality you can trust</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
