import React from 'react'
import './ModernResume.css'
import { brandonsResumeConfig } from './resumeConfig';
import { ResumePage, BackButton } from './ModernResumeStyles';
const ModernResume = (props) => {
    const { name, jobTitle, description, experiences, education, extras, email, address, phoneNumber } = brandonsResumeConfig
    const addSpace = (index) => {
        return index > 0 ? { marginTop: '5%' } : {}
    }
    const ExtraList = () => {
        return extras.map((extra, index) => {
            const style = addSpace(index)
            const { title, list } = extra
            const ExtraListItems = () => {
                return list.map(item => {
                    const desiredItem = item.isLink ? <li><a className="link" target="_blank" href={item.url}>{item.name}</a></li> : <li>{item.name}</li>
                    return desiredItem
                })
            }
            return (
                <section style={style}>
                    <h2 className="resumeHeader">{title}</h2>
                    <ul>
                        <ExtraListItems />
                    </ul>
                </section>
            )
        })
    }
    const ProfessionalExperience = () => {
        return experiences.map((experience, index) => {
            const style = addSpace(index)
            const { position, date, jobLocation, jobDuties, jobCompany } = experience
            const JobDutyList = () => {
                return jobDuties.map(duty => {
                    return (
                        <li>{duty}</li>
                    )
                })
            }

            return (
                <section style={style}>
                    <h3 className="resumeHeader"> {position} <span className="time">
                        <time datetime={date} className="start">2013</time>
                        &#8211; Present
      </span></h3>
                    <p><strong>{jobCompany}</strong> <b>{jobLocation}</b></p>
                    <ul>
                        <JobDutyList />
                    </ul>
                </section>
            )
        })

    }
    const EducationList = () => {
        return education.map(school => {
            const { name, degree, location, gradDate } = school

            return (
                <React.Fragment>

                    <h3 className="resumeHeader">{name} <span className="time">
                        <time datetime="2000-05-20">{gradDate}</time>
                    </span></h3>
                    <p>{degree} <b>{location}</b></p>
                </React.Fragment>
            )
        })
    }
    return (
        <ResumePage>
            <header>
                <BackButton onClick={() => props.setShowResume(false)}>Back</BackButton>
                <h1 className="title resumeHeader">{name}</h1>
                <div className="contact">
                    <ul className="contactItem">{email}</ul>
                    <ul className="contactItem">{address}</ul>
                    <ul className="contactItem">{phoneNumber}</ul>
                </div>
                <h1 className="titleBorder resumeHeader" />

                <h2 className="resumeHeader">{jobTitle}</h2>
                <p>{description}</p>
            </header>
            <div className="secondHalf">
                <section className="sharedSpace">
                    <article>
                        <ProfessionalExperience />
                        <section className="spacer">
                            <h2 className="resumeHeader">Formal Education</h2>
                            <EducationList />
                        </section>

                    </article>
                </section>

                <section className="sharedSpace">
                    <aside>
                        <ExtraList />

                    </aside>
                </section>
            </div>
        </ResumePage>
    )
}
export default ModernResume