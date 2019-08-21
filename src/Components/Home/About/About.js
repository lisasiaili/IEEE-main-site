import React from 'react'
import { Link } from 'react-router-dom';
import styles from './about.module.scss'
import computer from './../../../Assets/Images/misc/computer.png'
import electronics from './../../../Assets/Images/misc/electronics.png'
import ScrollAnimation from 'react-animate-on-scroll';


const About = () => {

    return (
        <div id="about" className={styles['about-containter']}>
            {/* <ScrollAnimation animateOnce={true} duration={1} offset={70} animateIn="fadeInUp" className={styles['about-containter']} style={{gridArea: "2/1/-1/4", zIndex: 99}}> */}
                <h2 className={styles['computer-heading']}>Computer Chapter</h2>
                <p className={styles['computer-text']}>Focusing on computer science and tech, we work hard to bring coding competitions, software workshops, industry tours and technical talks to the students at UofT. Our aim is to promote industry networking and career professionalism by coordinating with technology companies to provide exposure to new global innovations.</p>
                <img src={computer} className={styles['computer-img']}  alt="Computer Chapter" />

                <h2 className={styles['about-heading']}>About Us</h2>
                <p className={styles['about-text']}>IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. The UofT Student Branch consists of two chapters: Computer and Electronics. We host numerous events throughout the year, which are designed to help students reach their personal and professional development goals.</p>
                <div className={styles['about-btn-container']}>
                    <Link to={'/team'}>
                        <button className={styles['about-btn-container-button']}>our team</button>
                    </Link>

                    <a href="http://www.ieee.org" target="_blank">
                        <button className={styles['about-btn-container-button']}>visit ieee.org</button>
                    </a>
                </div>
                <h2 className={styles['electronics-heading']}>Electronics Chapter</h2>
                <p className={styles['electronics-text']}>The Electronics Chapter deals with everything hardware, from embedded systems to analog circuits. We aim to help students gain technical expertise and industry exposure in these fields. Among our events are industry tours, the hardware certification workshop, and our flagship, MakeUofT.</p>
                <img src={electronics} className={styles['electronics-img']}  alt="Electronics Chapter"/>
            {/* </ScrollAnimation> */}
            
            <div className={styles['computer']}></div>
            <div className={styles['about']}></div>
            <div className={styles['electronics']}></div>
        </div>
    )
}

export default About;


