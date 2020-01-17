import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const About = (props) => (
    <Layout>
        <Helmet>
            <title>About - Forty by HTML5 UP</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3>About this app</h3>
                    </header>
                    <h4>Instructions</h4>
                    <ol>
                        <li>Dolor etiam magna etiam.</li>
                        <li>Etiam vel lorem sed viverra.</li>
                        <li>Felis dolore viverra.</li>
                    </ol>
                    <h4>Version Info</h4>
                    <ul>
                        <li>Dolor etiam magna etiam.</li>
                        <li>Sagittis lorem eleifend.</li>
                        <li>Felis dolore viverra.</li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default About