import React from 'react';
import TeamData from '../data/TeamData';
import { Link } from 'react-router-dom';
import "../styles/About.css";
import MemberWrapper from '../component/Member/MemberWrapper';

const About = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>Welcome to our application. Here is some information about us.</p>
            <section>
                <h2 className="section-header">Our Team</h2>
                <p>Meet the talented individuals behind our success.</p>
                <div className="team-container">
                    {TeamData.map((member, index) => (
                        <MemberWrapper member={member} index={index}/>
                    ))}
                </div>
            </section>
            <section>
                <h2 className="section-header">Contact Us</h2>
                <p>If you have any questions, feel free to <Link to="/contact">contact us</Link>.</p>
            </section>
        </div>
    );
};

export default About;
