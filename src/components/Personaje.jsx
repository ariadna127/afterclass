import React from 'react'

const Personaje = ({ img, name, job, id }) => {
    return (
        <div className='col. lg-4'>
            <div className='text-center card box'>
                <div className='member-card pt-2 pb-2'>
                    <div className='thumb-lg member-thumb mx-auto'>
                        <img src={img} width="350px" height="350px" alt={name} className='rounded-cicle img-thumbnail' />
                        <div>
                            <h3>{name}</h3>
                            <p>{id}</p>
                            <p className='text-muted'>{job}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personaje