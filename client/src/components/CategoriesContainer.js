import React from 'react'
import Category from './Category'
import logoPersons from '../assets/Pictures/peeps.svg'
import logoBicicle  from '../assets/Pictures/peep-8.svg'


function CategoriesContainer() {
    const categories = [
        {
            name: 'PFP',
            url: 'url1',
            down: false,
        },
        {
            name: 'Art',
            url: 'url2',
            down: true,
        },
        {
            name: 'Meta',
            url: 'url3',
            down: false,
        },
        {
            name: 'Photo',
            url: 'url4',
            down: true,
        },
        {
            name: 'Games',
            url: 'url5',
            down: false,
        },
        {
            name: 'Sports',
            url: 'url6',
            down: true,
        },
        {
            name: 'NFSW',
            url: 'url7',
            down: false,
        },
    ]

    return (
        <div className='flex justify-center items-center flex-col p-20 bg-second-yellow w-full  h-'>
            <div className='flex justify-center flex-col gap-20'>
                <div className='flex justify-start items-center flex-row gap-5'>

                <h2 className='text-black font-bold text-5xl text-left self-end'> Categorias populares</h2>
                <img src={logoBicicle} alt="bicileLogo" />
                </div>
                <div className='flex justify-center items-center flex-wrap '>
                    {categories.map(category => <Category categoryName={category.name} down={category.down} />)}
                </div>
            </div>

        </div>
    )
}

export default CategoriesContainer