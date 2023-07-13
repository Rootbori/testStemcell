import React, {useEffect, useState} from 'react'

const Test: React.FC = () => {
    const [page, setPage] = useState(1)

    useEffect(() => {
    }, [page])

    return <div className={'relative middle w-full h-full bg-[#CCA8E0]'}>
        <span>กำลังพัฒนา</span>
    </div>
}

export default Test
