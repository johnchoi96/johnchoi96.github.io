import React, {useState, useEffect} from 'react'

import BubbleUI from 'react-bubble-ui'
import {companies} from '../pages/aboutpage/aboutCareerData'
import CompanyBubble from './CompanyBubble.jsx'
import 'react-bubble-ui/dist/index.css';
import './bubble.styles.css'
import CompanyModal from '../components/CompanyModal.component'

const CompanyBubbleUI = () => {
    const [modalShow, setModalShow] = useState(false)
    const [selectedCompany, setSelectedCompany] = useState(companies[0])
    const [orderedCompanies, setOrderedCompanies] = useState(companies)

    function openModal(data) {
        setSelectedCompany(data)
        setModalShow(true)
    }

    function closeModal() {
        setModalShow(false)
    }

    useEffect(() => {
        const midpoint = Math.floor(companies.length / 2)
        const orderedList = [...companies]

        var left = midpoint - 1
        var right = midpoint
        var i = 0
        if (orderedList.length % 2 === 1) {
            // insert center if odd number of elements
            orderedList[midpoint] = companies[i++]
            right++
        }
        var isLeft = false
        for (; i < orderedList.length; i++) {
            if (isLeft) {
                orderedList[left--] = companies[i]
            } else {
                orderedList[right++] = companies[i]
            }
            isLeft = !isLeft
        }
        setOrderedCompanies(orderedList)
    }, [])

    const options = {
		size: 200,
		minSize: 50,
		gutter: 10,
		provideProps: true,
		numCols: 3,
		fringeWidth: 200,
		yRadius: 100,
		xRadius: 100,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 10
	}

    const children = orderedCompanies.map((data, i) => {
        return (
            <CompanyBubble
                data={data}
                key={i}
                className='child'
                setClick={openModal}
            />
        )
    })

    return (
        <div>
            <BubbleUI
                options={options}
                className='myBubbleUI'
            >
                {children}
            </BubbleUI>
            <CompanyModal
                show={modalShow}
                data={selectedCompany}
                onHide={closeModal}
            />
        </div>

    )
}

export default CompanyBubbleUI