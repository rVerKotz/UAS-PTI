import React from 'react';
import TeamData from '../data/TeamData';
import { Link } from 'react-router-dom';
import "../styles/About.css";

const About = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>Welcome to our application. Here is some information about us.</p>
            <section>
                <h2 className="section-header">Our Team</h2>
                <p>Meet the talented individuals behind our success.</p>
                <div className="team-container">
                    {TeamData.map((member) => (
                        <div className="about-card" key={member.name}>
                            <img src={member.img} alt={member.name} />
                            <div className="about-card-container">
                                <h2>{member.name}</h2>
                                <p className="about-title">{member.title}</p>
                                <p>{member.description}</p>
                                <p>{member.email}</p>
                                <Link to="/contact" className="about-button">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2 className="section-header">Contact Us</h2>
                <p>If you have any questions, feel free to <Link to="/contact" style={{fontSize: '1em'}}>contact us</Link>.</p>
            </section>
        </div>
    );
};

export default About;
