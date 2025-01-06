import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import { GraduationCap, MapPin } from "lucide-react";
import "../assets/style/education.css"; // Import the CSS file

const Education = () => {
  return (
    <section id="education">
      <div className="container mx-auto px-4">
        <h2>&lt;Education./&gt;</h2>
        <div className="grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card motion"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3>{edu.degree}</h3>
                  <div className="institution">
                    <GraduationCap size={18} className="icon" />
                    <span>{edu.institution}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="duration">{edu.duration}</div>
                  <div className="location">
                    <MapPin size={16} className="location-icon" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                {edu.grade && <div className="grade">{edu.grade}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
