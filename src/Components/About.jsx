/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/Abstract_Geometric_Background_Black_White.png";

const imageAltText = "black and white abstract backgrounds, in the style of cubist shapes and planes, dark gray and dark black, 32k uhd, luminous shadowing, angular simplicity, angular --ar 128:63";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Welcome to my portfolio. As a Biomedical Engineering student at FHNW Muttenz and a former bio lab technician, I am deeply engaged in exploring the intersection of biology and engineering. Discover my projects and studies here, where I delve into the fascinating world of neural systems and technology.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = ["Python", "Lab work", "Data analysis", "CAD", "3D printing", "Engineering"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am deeply passionate about the potential of biomedical engineering to transform lives. My academic pursuits at FHNW Muttenz have not only deepened my understanding of biological systems but also fueled my fascination with the emerging field of brain-machine interfaces. I thrive in environments where creativity meets analytical thinking, and I believe in the power of collaborative innovation to solve complex problems. A quote that inspires me is by Nikola Tesla: \"The present is theirs; the future, for which I really worked, is mine.\" This reflects my forward-thinking approach and my commitment to contributing to the advancements in biomedical technology.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
