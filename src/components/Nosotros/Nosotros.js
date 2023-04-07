import react, { useEffect } from 'react';

export const Nosotros = () => {

    const clickear = (event) => {
        console.log(event)
    }
    useEffect(() => {

        window.addEventListener('click', clickear)

        return () => {
            window.removeEventListener('click', clickear)
        }

    }, [])


    return(
        <div style={{padding: '100px',}} onClick={clickear}>
            <h1>Nosotros</h1>
        </div>
    )
}