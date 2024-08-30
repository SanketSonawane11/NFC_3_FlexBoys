import React, { useState } from 'react'
import "./filter.css"
import { Slider } from '@mui/material'
import { category } from '../../../assets/category';

const Filter = ({ priceValue,categoryValue }) => {


    const BrandData = ["Mitera", "KALINI", "Anouk", "Saree mall", "Charukriti", "Sangria", "Florence"];
    const CategoryData = ["Formal", "Casual", "Boots", "Traditional", "Kurti", "Shoes", "Trouser","Winter"];
    const [cat,setCat] = useState('')

    const [isChecked1, setIsChecked1] = useState(false)
    const [isChecked2, setIsChecked2] = useState(false)
    const [isChecked3, setIsChecked3] = useState(false)
    const [isChecked4, setIsChecked4] = useState(false)
    const [isChecked5, setIsChecked5] = useState(false)
    const [isChecked6, setIsChecked6] = useState(false)
    const [isChecked7, setIsChecked7] = useState(false)
    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1)
        if (isChecked1) {
            priceValue([150, 350])
        }
    }
    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2)
        if (isChecked2) {
            priceValue([350, 550])
        }
    }
    const handleCheckboxChange3 = () => {
        setIsChecked3(!isChecked3)
        if (isChecked3) {
            priceValue([550, 750])
        }
    }
    const handleCheckboxChange4 = () => {
        setIsChecked4(!isChecked4)
        if (isChecked4) {
            priceValue([750, 1250])
        }
    }
    const handleCheckboxChange5 = () => {
        setIsChecked5(!isChecked5)
        if (isChecked5) {
            priceValue([1250, 2500])
        }
    }
    const handleCheckboxChange6 = () => {
        setIsChecked6(!isChecked6)
        if (isChecked6) {
            priceValue([2500, 5000])
        }
    }
    const handleCheckboxChange7 = () => {
        setIsChecked7(!isChecked7)
        if (isChecked7) {
            priceValue([5000, 10000])
        }
    }



    return (
        <>
            <div className="filterBox">
                <div className="filterSubBox">
                    <h2 className='subHeading'>
                        Filter
                    </h2>
                </div>
                <div className="filterSubBox">
                    <h2 className='subHeading-1'>
                        CATEGORIES
                    </h2>
                    {
                        CategoryData.map((item)=>(
                            <div className="inputWrapper">
                            <input type="checkbox" name="" id=""
                                checked={cat === item ? true :false}
                                onChange={()=>setCat(!cat)} 
                                />
                           <button onClick={()=>{priceValue(item); setCat(item) }}><p className='pModified'>{item}</p></button>
                        </div>
                        ))

                    }

                </div>
                {/* <div className="filterSubBox">
                    <h2 className='subHeading-1'>
                        GENDER
                    </h2>
                </div> */}
                <div className="filterSubBox">
                    <h2 className='subHeading-1'>
                        PRICE
                    </h2>
                    <div className="inputWrapper">
                        <input type="checkbox" name="" id=""
                            checked={isChecked1}
                            onChange={handleCheckboxChange1} 
                            />
                        <p className='pModified'>Rs. 150 to Rs. 350</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="checkbox" name="" id=""
                            checked={isChecked2}
                            onChange={handleCheckboxChange2}
                        />
                        <p className='pModified'>Rs. 350 to Rs. 550</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="checkbox" name="" id=""
                            checked={isChecked3}
                            onChange={handleCheckboxChange3} 
                            />
                        <p className='pModified'>Rs. 550 to Rs. 750</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="checkbox" name="" id=""
                            checked={isChecked4}
                            onChange={handleCheckboxChange4} 
                            />
                        <p className='pModified'>Rs. 750 to Rs. 1250</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="checkbox" name="" id=""
                            checked={isChecked5}
                            onChange={handleCheckboxChange5}
                             />
                        <p className='pModified'>Rs. 1250 to Rs. 2500</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="checkbox" name="" id=""
                            checked={isChecked6}
                            onChange={handleCheckboxChange6}
                             />
                        <p className='pModified'>Rs. 2500 to Rs. 5000</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="checkbox" name="" id=""
                            checked={isChecked7}
                            onChange={handleCheckboxChange7}
                             />
                        <p className='pModified'>Rs. 5000 to Rs. 10000</p>
                    </div>


                    {/* <Slider /> */}
                </div>
                <div className="filterSubBox">
                    <h2 className='subHeading-1'>
                        BRAND
                    </h2>
                    {BrandData.map((item) => (
                        <div className="inputWrapper">
                            <input type="checkbox" name="" id="" />
                            <p className='pModified'>{item}</p>
                        </div>
                    ))

                    }
                </div>
                <div className="filterSubBox">
                    <h2 className='subHeading-1'>
                        CUSTOMER RATINGS
                    </h2>
                    <div className="inputWrapper">
                        <input type="checkbox" name="" id="" />
                        <p className='pModified'>4 Star</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="checkbox" name="" id="" />
                        <p className='pModified'>3 Star</p>
                    </div>
                    <div className="inputWrapper">
                        <input type="checkbox" name="" id="" />
                        <p className='pModified'>2 Star</p>
                    </div>
                </div>
                <div className="filterSubBox">
                    <h2 className='subHeading-1'>
                        AVAILABILITY
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Filter;