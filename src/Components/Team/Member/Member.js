import React, { PureComponent } from 'react'
import styles from './member.module.scss'
import Email from './../../../Assets/Images/team/icons/email.svg';
import LinkedIn from './../../../Assets/Images/team/icons/linkedin.svg';
import Placeholder from './../../../Assets/Images/team/placeholder.png'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Member extends PureComponent {
    render() {
        const {
            fullName, 
            position,
            year,
            emailLink,
            LinkedInLink,
        } = this.props;

        let imgSrc = Placeholder;
        if (year != "2019-2020") {
            imgSrc = require('./../../../Assets/Images/team/' + year + '/' + fullName + '.jpg');
        }

        return (
            <ScrollAnimation animateOnce={true} duration={1} offset={50} className={styles['card']} animateIn="fadeInUp" style={{widht: "100%"}}>

            {/* <div className={styles['card']}> */}
                <div className={styles['card-crop']}>
                    <img className={styles['card-crop-img']} src={imgSrc} alt={fullName} />
                </div>
                <p className={styles['card-title']}>{position}</p>
                <p className={styles['card-name']}>{fullName}</p>
                <div className={styles['card-btn']}>
                    {emailLink && (
                        <a href={`mailto:${emailLink}`} className={styles['card-btn-email']}>
                            <img src={Email} className={styles['card-btn-email-icon']} alt="Email" />
                        </a>
                    )}
                    {LinkedInLink && (
                        <a href={LinkedInLink} className={styles['card-btn-linkedin']}>
                            <img src={LinkedIn} className={styles['card-btn-linkedin-icon']} alt="LinkedIn" />
                        </a>
                    )}
                </div>
            {/* </div> */}
            </ScrollAnimation>
        );
    }
}
