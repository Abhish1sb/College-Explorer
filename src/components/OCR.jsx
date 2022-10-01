import React from 'react'

const OCR = () => {
    const roundArr = [1, 2];
    const typeArr = [1, 2, 3, 4, 5];
    const nameArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
    const branchArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className='container'>
            <div className="ocrdiv">
                <h1 className="text-3xl font-bold underline flex flex-col items-center m-auto justify-center mb-10">
                    Welcome to Jee Mains OCR
                </h1>
                <div className='flex p-3 flex-row items-center m-auto justify-center'>

                    <select className='border border-[#123456] outline-none' defaultValue={'DEFAULT'} name="round" id="round" placeholder='Select the Round number'>
                        <option value="DEFAULT" disabled>Select the Round number</option>
                        {roundArr &&
                            roundArr.map((item) => {
                                return (
                                    <option value={item}>{item}</option>
                                );
                            })}
                    </select>

                    <select className='border border-[#123456] outline-none' defaultValue={'DEFAULT'} name="ins-type" id="ins-type" placeholder='Select the Institute type'>
                        <option value="DEFAULT" disabled>Select the Institute type</option>
                        {typeArr &&
                            typeArr.map((item) => {
                                return (
                                    <option value={item}>{item}</option>
                                );
                            })}
                    </select>

                    <select className='border border-[#123456] outline-none' defaultValue={'DEFAULT'} name="ins-name" id="ins-name" placeholder='Select the Institute name'>
                        <option value="DEFAULT" disabled>Select the Institute name</option>
                        {nameArr &&
                            nameArr.map((item) => {
                                return (
                                    <option value={item}>{item}</option>
                                );
                            })}
                    </select>

                    <select className='border border-[#123456] outline-none' defaultValue={'DEFAULT'} name="branch" id="branch" placeholder='Select the branch'>
                        <option value="DEFAULT" disabled>Select the Branch</option>
                        {branchArr &&
                            branchArr.map((item) => {
                                return (
                                    <option value={item}>{item}</option>
                                );
                            })}
                    </select>

                </div>
            </div>
        </div>
    )
}

export default OCR;