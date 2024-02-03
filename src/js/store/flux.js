import { element } from "prop-types";
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            personajes: [],
            planetas: [],
            vehiculos: [],
            favoritos: [],
            detallespersonaje: {},
            planeta: {},
            vehicle:{}
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();
                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                //reset the global store
                setStore({ demo: demo });
            },
            getPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({ personajes: data.results }))
                    .catch(error => console.error(error))
            },
            getDetalles: (url) => {
                fetch(url)
                    .then(res => res.json())
                    .then(data => setStore({ detallespersonaje: data.result }))
                    .catch(error => console.error(error))
            },
            getPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({ planetas: data.results }))
                    .catch(error => console.error(error))
            },
            getPlaneta: (url) => {
                fetch(url)
                    .then(res => res.json())
                    .then(data => setStore({ planeta: data.result }))
                    .catch(error => console.error(error))
            },
            getVehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({ vehiculos: data.results }))
                    .catch(error => console.error(error))
            },
            getVehicle: (url) => {
                fetch(url)
                    .then(res => res.json())
                    .then(data => setStore({ vehicle: data.result }))
                    .catch(error => console.error(error))
            },
            removeFavorites: (item) => {
                const store = getStore()
                let newFavorite = store.favoritos.filter((element) => element !== item)
                setStore({ favoritos: newFavorite })
            },
            setFavorites: (item) => {
                const store = getStore()
                let setFavorites = store.favoritos.includes(item)
                if (!setFavorites) {
                    setStore({ favoritos: [...store.favoritos, item] })
                }
            }
        }
    };
};
export default getState;