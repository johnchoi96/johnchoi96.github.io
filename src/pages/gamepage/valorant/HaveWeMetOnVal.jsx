import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { sendPageview } from '../../../analytics/useAnalyticsEventTracker'
import { getBackgroundColor } from '../../../Utils/colorUtils'
import { getFontColorText } from '../../../Utils/colorUtils'
import IncompletePageModal from '../../../components/modals/IncompletePageModal'

import './HaveWeMetOnVal.style.css'
import HaveWeMetOnValResponseModal from '../../../components/modals/HaveWeMetOnValResponseModal'

export default function HaveWeMetOnVal() {
    const { register, handleSubmit } = useForm()

    const [detailModalOpen, setDetailModalOpen] = useState(false)

    const [inputData, setInputData] = useState()

    const onSubmit = (data) => {
        setInputData(data)
        setDetailModalOpen(true)
    }

    useEffect(() => {
        document.body.style.overflow = 'scroll'
    }, [])

    useEffect(() => {
        sendPageview(
            '/games/valorant/have-we-met-on-val',
            'Valorant/Have We Met On Val Page'
        )
    }, [])

    return (
        <div
            style={{
                paddingTop: '44px',
                paddingBottom: '50px',
                backgroundColor: getBackgroundColor(),
                minHeight: window.innerHeight - 44
            }}
        >
            <IncompletePageModal />
            {
                detailModalOpen ? <HaveWeMetOnValResponseModal inputData={inputData} setModalOpen={setDetailModalOpen} /> : <></>
            }
            <h1 className={`text-${getFontColorText()}`}>
                Have We Met On Val?
            </h1>
            <form className='myForm' onSubmit={handleSubmit(onSubmit)}>
                <label className='formLabel'>
                    <input
                        className='formInput'
                        {...register('username')}
                        placeholder='Enter your username'
                        required
                    />
                </label>
                <br />
                <label className='formLabel'>
                    <input
                        className='formInput'
                        {...register('tag')}
                        placeholder='Enter your tag'
                        required
                    />
                </label>
                <br />
                <label className='formLabel'>
                    <input
                        className='formInput'
                        {...register('target_username')}
                        placeholder='Enter target username'
                        required
                    />
                </label>
                <br />
                <button className='submitButton' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}
