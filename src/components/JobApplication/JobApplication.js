import React from "react";

import Section from "react-bulma-components/lib/components/section";
import Container from "react-bulma-components/lib/components/container";
import Columns from "react-bulma-components/lib/components/columns";
import Image from "react-bulma-components/lib/components/image";

import CloseIcon from "../base/CloseIcon";

import "./Styles.scss";

import UserImage from "../../assets/img/user_image.png";
import UserConnectionImage from "../../assets/img/connnection_image.png";

export default function JobApplication({ user }) {
  return (
    <Section>
      <Container>
        <Columns>
          <Columns.Column
            fullhd={{
              size: "two-thirds",
              offset: "one-fifth"
            }}
          >
            <div className="job-application-card-wrapper border bg-white">
              <Columns gapless className="border">
                <Columns.Column size={4} className="job-application-user-card border-right">
                  <div className="job-application-user-card-close">
                    <CloseIcon />
                  </div>
                  <div className="job-application-card-user-info">
                    <div className="progress--circle progress--82">
                      <div className="job-application-card-user-image-wrapper">
                        <Image src={UserImage} rounded />
                      </div>
                    </div>
                    <span className="job-application-match-label">{user.match}% Match</span>
                    <span className="job-application-user-name">
                      {user.name}
                      {user.isPremium && (
                        <>
                          {" "}
                          <div className="job-application-premium-badge">
                            <svg
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="16px"
                              height="14px"
                              viewBox="0 0 63.548 63.548"
                            >
                              <g>
                                <path
                                  d="M32.647,19.399V4.471l10.55,10.543c0.23,0.229,0.529,0.342,0.826,0.342c0.296,0,0.598-0.115,0.825-0.342
		c0.457-0.455,0.457-1.195,0-1.65L32.309,0.827c0,0,0,0,0-0.002L31.482,0l-0.825,0.824c-0.002,0-0.002,0-0.004,0.002L18.12,13.363
		c-0.457,0.455-0.457,1.195,0,1.65c0.453,0.457,1.195,0.457,1.65,0L30.314,4.471v14.956C18.811,20.184,9.675,29.759,9.675,41.451
		c0,12.184,9.914,22.097,22.099,22.097c12.186,0,22.1-9.913,22.1-22.097C53.87,29.562,44.425,19.863,32.647,19.399z M31.771,61.215
		c-10.896,0-19.763-8.864-19.763-19.761c0-10.406,8.089-18.937,18.303-19.689v18.469c0,0.644,0.524,1.168,1.168,1.168
		c0.645,0,1.168-0.524,1.168-1.168V21.737c10.488,0.462,18.888,9.116,18.888,19.719C51.535,52.351,42.668,61.215,31.771,61.215z"
                                />
                              </g>
                            </svg>
                          </div>
                        </>
                      )}
                    </span>
                    <span className="job-application-user-location">{user.location}</span>
                    <p className="job-application-user-description">{user.description}</p>
                  </div>
                  <div className="job-application-card-action-buttons">
                    <Columns gapless>
                      <Columns.Column size={6}>
                        <button>
                          <svg height="12" id="close" viewBox="0 0 32 32" width="12">
                            <path d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z" />
                          </svg>
                          Pass
                        </button>
                      </Columns.Column>
                      <Columns.Column size={6}>
                        <button>
                          <svg
                            enableBackground="new 0 0 24 24"
                            height="12"
                            version="1.1"
                            viewBox="0 0 24 24"
                            width="12"
                          >
                            <path
                              clipRule="evenodd"
                              d="M22.5,14H14v8.5c0,0.276-0.224,0.5-0.5,0.5h-4C9.224,23,9,22.776,9,22.5V14H0.5  C0.224,14,0,13.776,0,13.5v-4C0,9.224,0.224,9,0.5,9H9V0.5C9,0.224,9.224,0,9.5,0h4C13.776,0,14,0.224,14,0.5V9h8.5  C22.776,9,23,9.224,23,9.5v4C23,13.776,22.776,14,22.5,14z"
                              fillRule="evenodd"
                            />
                          </svg>
                          Shortlist
                        </button>
                      </Columns.Column>
                    </Columns>
                  </div>
                </Columns.Column>
                <Columns.Column size={8}>
                  <div className="job-application-summary">
                    {user.jobs.map(job => {
                      return (
                        <div className="job-application-resume-item" key={`user_job_${job.id}`}>
                          <span className="job-application-resume-item-title">
                            {job.position} - <span className="blue-400-text">{job.title}</span>
                          </span>{" "}
                          <span className="job-application-resume-item-year float-right">{job.year}</span>
                          <div>
                            <span className="job-application-resume-item-job grey-300-text">{job.category}</span>
                            <span className="job-application-resume-item-job grey-300-text float-right">
                              {job.company}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                    <div className="job-application-info">
                      <span className="blue-350-text">MUTUAL CONNECTIONS</span>
                      <div className="job-application-connections-images">
                        {user.connections.map(({ id }) => {
                          return (
                            <div
                              className="job-application-connections image"
                              style={{ backgroundImage: `url(${UserConnectionImage})` }}
                              key={`user_connection_${id}`}
                            ></div>
                          );
                        })}
                        <div className="job-application-connections more">3+</div>
                      </div>
                      <div className="float-right">
                        <span className="blue-400-text">
                          RELEVANT CREDITS <span className="badge">{user.credits}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Columns.Column>
              </Columns>
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
}
