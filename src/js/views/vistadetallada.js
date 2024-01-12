import React from "react";
import { useParams } from "react-router-dom";
export function DetailView() {
    const params = useParams()
    actions.()

        console.log(params.id)
        useEffect(() => { // cada vez que quiera ejecutar una funcion ni bien se cargue el componente debo hacer un useEffect, React dice esto va asi! siempre antes del return
            // obtenerPersonajes, obtenerPlanetas()
            
        }, [])
    return <h1>hola</h1>
}