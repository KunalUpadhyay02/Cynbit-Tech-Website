import React from 'react'
import './Services.css'
import Title from '../Title/Title'
import boxicons from 'boxicons'

const Services = () => {
  return (
    <div>
        <div className="wrapper">
        <Title subTitle='Services' title='Our Services'/>
             <div className="content-box">
                <div className="card">
                    <box-icon name="chart"></box-icon>
                    <h2>Marketing Services</h2>
                    <p>Marketing services can include advertising, public relations, market research, and more. </p>

                </div>
                <div className="card">
                    <box-icon name="laptop"></box-icon>
                    <h2>Website Development</h2>
                    <p>Web development refers to the creating, building, and maintaining of websites.</p>
                         
                </div>
                <div className="card">
                    <box-icon name="user"></box-icon>
                    <h2>24/7 Call Center Services</h2>
                    <p>A BPO call center is a team of outsourced agents who handle incoming and outgoing.</p>
                         
                </div>
                <div className="card">
                    <box-icon name="mail-send"></box-icon>
                    <h2>Social Media Marketing</h2>
                    <p> Iure ad fuga, voluptas nisi odit blanditiis aut culpa quasi. Expedita deleniti molestias hic
                        numquam delectus!</p>
                         
                </div>
                <div className="card">
                    <box-icon name="bar-chart"></box-icon>
                    <h2>Copporate Bussiness</h2>
                    <p> Iure ad fuga, voluptas nisi odit blanditiis aut culpa quasi. Expedita deleniti molestias hic
                        numquam delectus!</p>
                         
                </div>
                <div className="card">
                    <box-icon name="paint"></box-icon>
                    <h2>Creative Consultancy</h2>
                    <p> Iure ad fuga, voluptas nisi odit blanditiis aut culpa quasi. Expedita deleniti molestias hic
                        numquam delectus!</p>
                         
                </div>
             </div>
    </div>
    </div>
  )
}

export default Services