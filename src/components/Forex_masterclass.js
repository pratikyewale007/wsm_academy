import React from 'react'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Forex_masterclass = () => {
    const [activeTab, setActiveTab] = useState('description');

    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <section className="container py-5">
            <div className="bg-dark text-light d-inline-block px-3 py-1 rounded-pill mb-3 fw-bold">
                MODULE - 04 | ONLINE
            </div>

            <h3 className="fw-bold comptitles">FOREX TRADING MASTERCLASS</h3>
            <h5 className="fw-semibold text-secondary">Class For Forex Trading With Advanced Price-Action</h5>

            <div className="container mt-5">
                <div className="d-flex justify-content-start border-bottom">
                    <div
                        className={`pb-2 px-5 fw-semibold ${activeTab === 'description' ? 'text-primary border-bottom border-2 border-success' : 'text-muted'}`}
                        role="button"
                        onClick={() => handleClick('description')}
                    >
                        Description
                    </div>
                    <div
                        className={`pb-2 px-5 fw-semibold ${activeTab === 'content' ? 'text-primary border-bottom border-2 border-success' : 'text-muted'}`}
                        role="button"
                        onClick={() => handleClick('content')}
                    >
                        Class Content
                    </div>
                </div>

                <div className="mt-4">
                    {activeTab === 'description' &&
                        <div>
                            <strong>Description:</strong>
                            <p>
                                This course provides a comprehensive introduction to the fundamental concepts and workings of the stock market. From understanding the basics of stocks and shares to analyzing market trends and making informed investment decisions, you'll gain the knowledge and skills necessary to navigate the exciting world of stock trading.
                            </p>
                            <hr />
                            <strong>Key Highlights</strong>
                            <ul>
                                <li>Master the fundamental principles and terminology of the stock market</li>
                                <li>Understand how stock exchanges function and the role of brokers and market participants</li>
                                <li>Explore various investment strategies and trading techniques used in the stock market</li>
                                <li>Learn how to analyze stock charts and identify patterns for making informed investment decisions</li>
                                <li>Gain insights into the factors influencing stock prices and understand market trends</li>
                                <li>Discover effective risk management and portfolio diversification strategies</li>
                                <li>Develop practical skills and tips for successful stock market investing</li>
                            </ul>
                            <hr />
                            <strong>What Will You Learn</strong>
                            <ul>
                                <li>Learn the key terminology and concepts of the stock market</li>
                                <li>Understand how stock exchanges operate</li>
                                <li>Discover various investment strategies and trading techniques</li>
                                <li>Learn how to read and interpret stock charts</li>
                                <li>Explore the factors influencing stock prices</li>
                                <li>Risk management and portfolio diversification strategies</li>
                                <li>Practical tips for successful stock market investing</li>
                            </ul>
                            <hr />
                        </div>
                    }

                    {activeTab === 'content' &&
                        <div className='row'>
                            <div className="col-md-4 mt-4">
                                <h5><LabelImportantIcon color='primary' fontSize='large' /> Introduction to Stock Market</h5>
                                <ul className='list-unstyled ms-4'>
                                    <li><RadioButtonCheckedIcon color='success' />  What is a Stock Market</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Why Invest in Stocks</li>
                                    <li><RadioButtonCheckedIcon color='success' />  How the Stock Market Works</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Types of Stock Markets</li>
                                </ul>
                            </div>
                            <div className="col-md-4 mt-4">
                                <h5><LabelImportantIcon color='primary' fontSize='large' /> Basics of Investing</h5>
                                <ul className='list-unstyled ms-4'>
                                    <li><RadioButtonCheckedIcon color='success' />  Understanding Stocks and Shares</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Risk and Return</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Investment Strategy</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Diversification</li>
                                </ul>
                            </div>
                            <div className="col-md-4 mt-4">
                                <h5><LabelImportantIcon color='primary' fontSize='large' /> Fundamental Analysis</h5>
                                <ul className='list-unstyled ms-4'>

                                    <li><RadioButtonCheckedIcon color='success' />  Evaluating Company Financials</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Assessing Balance Sheets</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Analyzing Income Statements</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Examining Cash Flow Statements</li>
                                </ul>
                            </div>
                            <div className="col-md-4 mt-4">
                                <h5><LabelImportantIcon color='primary' fontSize='large' /> Technical Analysis</h5>
                                <ul className='list-unstyled ms-4'>

                                    <li><RadioButtonCheckedIcon color='success' />  Introduction to Technical Analysis</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Chart Patterns</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Trend Analysis</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Technical Indicators</li>
                                </ul>
                            </div>
                            <div className="col-md-4 mt-4">
                                <h5><LabelImportantIcon color='primary' fontSize='large' /> Investment Risk Management</h5>
                                <ul className='list-unstyled ms-4'>

                                    <li><RadioButtonCheckedIcon color='success' />  Risk Assessment and Allocation</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Stop Loss Orders</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Asset Allocation</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Managing Market Volatility</li>
                                </ul>
                            </div>
                            <div className="col-md-4 mt-4">
                                <h5><LabelImportantIcon color='primary' fontSize='large' /> Stock Market Strategies</h5>
                                <ul className='list-unstyled ms-4'>

                                    <li><RadioButtonCheckedIcon color='success' />  Value Investing</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Growth Investing</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Dividend Investing</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Day Trading vs Long-Term Investing</li>
                                </ul>
                            </div>
                            <div className="col-md-4 mt-4">
                                <h5><LabelImportantIcon color='primary' fontSize='large' /> Stock Market Indices and Exchanges</h5>
                                <ul className='list-unstyled ms-4'>

                                    <li><RadioButtonCheckedIcon color='success' />  Major Market Indices</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Types of Stock Exchanges</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Understanding Market Performance</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Tracking Market Trends</li>
                                </ul>
                            </div>
                            <div className="col-md-4 mt-4">
                                <h5><LabelImportantIcon color='primary' fontSize='large' /> Investment Psychology and Emotions</h5>
                                <ul className='list-unstyled ms-4'>

                                    <li><RadioButtonCheckedIcon color='success' />  Behavioral Finance</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Controlling Emotions</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Avoiding Common Investment Mistakes</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Maintaining a Long-Term Perspective</li>
                                </ul>
                            </div>
                            <div className="col-md-4 mt-4">
                                <h5><LabelImportantIcon color='primary' fontSize='large' /> Investment Strategies for Different Market Conditions</h5>
                                <ul className='list-unstyled ms-4'>

                                    <li><RadioButtonCheckedIcon color='success' />  Bull Market Strategies</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Bear Market Strategies</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Sideways Market Strategies</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Adapting to Changing Market Conditions</li>
                                </ul>
                            </div>
                            <div className="col-md-4 mt-4">
                                <h5><LabelImportantIcon color='primary' fontSize='large' /> Building a Stock Portfolio</h5>
                                <ul className='list-unstyled ms-4'>

                                    <li><RadioButtonCheckedIcon color='success' />  Portfolio Construction</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Portfolio Diversification</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Rebalancing and Review</li>
                                    <li><RadioButtonCheckedIcon color='success' />  Performance Evaluation</li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>

            <div className="container py-4">
                <div className="d-flex justify-content-around flex-wrap text-center">
                    <div>
                        <i className="bi bi-clock fs-1 text-primary"></i>
                        <h5 className="fw-bold mt-2">Duration</h5>
                        <p>45 days | 38 Online Interactive Sessions</p>
                    </div>
                    <div>
                        <i className="bi bi-calendar-event fs-1 text-primary"></i>
                        <h5 className="fw-bold mt-2">Batch Dates</h5>
                        <p><Link to='/contactus' className="text-decoration-none text-primary">Contact Us</Link></p>
                    </div>
                    <div>
                        <i class="bi bi-person-workspace fs-1 text-primary"></i>
                        <h5 className="fw-bold mt-2">Learning Mode</h5>
                        <ul className="list-unstyled">
                            <li>Online</li>
                        </ul>
                    </div>
                    <div>
                        <i class="bi bi-translate fs-1 text-primary"></i>
                        <h5 className="fw-bold mt-2">Language</h5>
                        <ul className="list-unstyled">
                            <li>English | हिन्दी | मराठी  </li>
                        </ul>
                    </div>
                    <div>
                        <i class="bi bi-currency-rupee fs-1 text-primary"></i>
                        <h5 className="fw-bold mt-2">Price</h5>
                        <ul className="list-unstyled">
                            <p><b>₹ 12999</b> ₹ <del>18999</del></p>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Forex_masterclass
