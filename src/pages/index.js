import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const HomeIndex = (props) => (
    <Layout>
        <Helmet>
            <title>Elements - Forty by HTML5 UP</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <div className="grid-wrapper">
                        <div className="col-6 first-section">
                            <form method="post" action="#">
                                <h3>Section 1</h3>
                                <div className="col-12">
                                    <div className="select-wrapper mb-2">
                                        <label htmlFor="demo-category1">Dropdown1</label>
                                        <select name="demo-category1" id="demo-category1">
                                            <option defaultValue="">- Category -</option>
                                            <option value="1">Manufacturing</option>
                                            <option value="1">Shipping</option>
                                            <option value="1">Administration</option>
                                            <option value="1">Human Resources</option>
                                        </select>
                                    </div>
                                    <div className="select-wrapper mb-2">
                                        <label htmlFor="demo-category2">Dropdown2</label>
                                        <select name="demo-category2" id="demo-category2">
                                            <option defaultValue="">- Category -</option>
                                            <option value="1">Manufacturing</option>
                                            <option value="1">Shipping</option>
                                            <option value="1">Administration</option>
                                            <option value="1">Human Resources</option>
                                        </select>
                                    </div>
                                    <div className="select-wrapper mb-2">
                                        <label htmlFor="demo-category3">Dropdown3</label>
                                        <select name="demo-category3" id="demo-category3">
                                            <option defaultValue="">- Category -</option>
                                            <option value="1">Manufacturing</option>
                                            <option value="1">Shipping</option>
                                            <option value="1">Administration</option>
                                            <option value="1">Human Resources</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid-wrapper">
                                    <div className="col-6">
                                        <div className="mb-5">
                                            <label htmlFor="demo-name">Name</label>
                                            <input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <ul className="actions small short-list">
                                            <li><a href="#" className="button special small icon fa-plus">Add</a></li>
                                            <li><a href="#" className="button small icon fa-undo">Reset</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-6">
                            &nbsp;
                        </div>
                        <div className="col-6 second-section">
                            <h3>Section 2</h3>
                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Col1</th>
                                            <th>Col2</th>
                                            <th>Col3</th>
                                            <th>Col4</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" id="demo-copy1" name="demo-copy1" /><label htmlFor="demo-copy1">Checkbox 1</label></td>
                                            <td>#</td>
                                            <td>#</td>
                                            <td>#</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" id="demo-copy2" name="demo-copy2" /><label htmlFor="demo-copy2">Checkbox 2</label></td>
                                            <td>#</td>
                                            <td>#.</td>
                                            <td>#</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default HomeIndex